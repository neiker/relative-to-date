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
        const [, amount, kind, suffix] = matches;

        const { setter, getter } = UNITS.filter(u => u.key === kind)[0];

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
