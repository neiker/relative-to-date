const SUFFIX_AGO = 'ago';
const SUFFIX_FROM_NOW = 'from now';

const UNITS = [
  {
    key: 'year',
    getter: 'getUTCFullYear',
    setter: 'setYear',
  },
  {
    key: 'month',
    getter: 'getMonth',
    setter: 'setMonth',
  },
  {
    key: 'day',
    getter: 'getDate',
    setter: 'setDate',
  },
  {
    key: 'hour',
    getter: 'getHours',
    setter: 'setHours',
  },
  {
    key: 'minute',
    getter: 'getMinutes',
    setter: 'setMinutes',
  },
  {
    key: 'second',
    getter: 'getSeconds',
    setter: 'setSeconds',
  },
];

function getUnitByName(unitName) {
  let unit;

  for (let i = 0; i <= UNITS.length; i++) {
    unit = UNITS[i];

    if (unit.key === unitName) {
      return unit;
    }
  }

  return undefined;
}

const REGEXP = new RegExp(
  `^([0-9]+)\\s(${UNITS.map(unit => unit.key).join('|')})s?\\s(${SUFFIX_AGO}|${SUFFIX_FROM_NOW})$`
);

function parser(input) {
  let result;

  if (input) {
    const matches = input.match(REGEXP);

    if (input === 'now' || matches) {
      result = new Date();

      if (matches) {
        const [, amount, unitName, suffix] = matches;

        const { setter, getter } = getUnitByName(unitName);

        if (suffix === SUFFIX_AGO) {
          result[setter](result[getter]() - parseInt(amount, 10));
        } else {
          result[setter](result[getter]() + parseInt(amount, 10));
        }
      }
    }
  }

  if (!result) {
    throw new Error(`'${input}' it's an invalid date`);
  }

  return result;
}


export default parser;
