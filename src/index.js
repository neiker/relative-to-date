const SUFFIX_AGO = 'ago';
const SUFFIX_FROM_NOW = 'from now';

const UNITS = [
  {
    name: 'year',
    getter: date => date.getUTCFullYear(),
    setter: (date, value) => date.setYear(value),
  },
  {
    name: 'month',
    getter: date => date.getMonth(),
    setter: (date, value) => date.setMonth(value),
  },
  {
    name: 'week',
    getter: date => date.getDate() / 7,
    setter: (date, value) => date.setDate(value * 7),
  },
  {
    name: 'day',
    getter: date => date.getDate(),
    setter: (date, value) => date.setDate(value),
  },
  {
    name: 'hour',
    getter: date => date.getHours(),
    setter: (date, value) => date.setHours(value),
  },
  {
    name: 'minute',
    getter: date => date.getMinutes(),
    setter: (date, value) => date.setMinutes(value),
  },
  {
    name: 'second',
    getter: date => date.getSeconds(),
    setter: (date, value) => date.setSeconds(value),
  },
];

function getUnitByName(unitName) {
  let unit;

  for (let i = 0; i <= UNITS.length;) {
    unit = UNITS[i];

    if (unit.name === unitName) {
      return unit;
    }

    i += 1;
  }

  return undefined;
}

const REGEXP = new RegExp(`^([0-9]+)\\s(${UNITS.map(unit => unit.name).join('|')})s?\\s(${SUFFIX_AGO}|${SUFFIX_FROM_NOW})$`);

function parser(input) {
  let date;

  if (input) {
    if (input === 'now') {
      date = new Date();
    } else {
      const matches = input.match(REGEXP);

      if (matches) {
        date = new Date();

        const [, amount, unitName, suffix] = matches;

        const { getter, setter } = getUnitByName(unitName);

        const currentValue = getter(date);

        let newValue;
        if (suffix === SUFFIX_AGO) {
          newValue = currentValue - parseInt(amount, 10);
        } else {
          newValue = currentValue + parseInt(amount, 10);
        }

        setter(date, newValue);
      }
    }
  }

  if (!date) {
    throw new Error(`'${input}' it's an invalid date`);
  }

  return date;
}

export default parser;
