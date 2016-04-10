/* eslint-env mocha */

const assert = require('assert');
const relativeToDate = require('../src/index');

describe('#relativeToDate()', () => {
  describe('Basics', () => {
    it('should throw an exception on empty input', () => {
      assert.throws(() => relativeToDate(), Error);
    });
    it('should throw an exception on invalid input', () => {
      assert.throws(() => relativeToDate('5 alpargatas ago'), Error);
    });
    it('should return a Date object instance for valid input', () => {
      assert(relativeToDate('5 years ago') instanceof Date);
    });
  });

  describe('Past dates', () => {
    it('should return a 5 years ago Date', () => {
      const expected = new Date();
      expected.setYear(expected.getUTCFullYear() - 5);

      const actual = relativeToDate('5 years ago');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 20 months ago Date', () => {
      const expected = new Date();
      expected.setMonth(expected.getMonth() - 20);

      const actual = relativeToDate('20 months ago');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 193 days ago Date', () => {
      const expected = new Date();
      expected.setDate(expected.getDate() - 193);

      const actual = relativeToDate('193 days ago');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 4 hours ago Date', () => {
      const expected = new Date();
      expected.setHours(expected.getHours() - 4);

      const actual = relativeToDate('4 hours ago');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 48 hours ago Date', () => {
      const expected = new Date();
      expected.setHours(expected.getHours() - 48);

      const actual = relativeToDate('48 hours ago');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 90 minutes ago Date', () => {
      const expected = new Date();
      expected.setMinutes(expected.getMinutes() - 90);

      const actual = relativeToDate('90 minutes ago');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 15 seconds ago Date', () => {
      const expected = new Date();
      expected.setSeconds(expected.getSeconds() - 15);

      const actual = relativeToDate('15 seconds ago');

      assert.equal(actual.toString(), expected.toString());
    });
  });

  describe('Now', () => {
    it('should return current date', () => {
      const expected = new Date();

      const actual = relativeToDate('now');

      assert.equal(actual.toString(), expected.toString());
    });
  });

  describe('Future dates', () => {
    it('should return a 30 years from now Date', () => {
      const expected = new Date();
      expected.setYear(expected.getUTCFullYear() + 30);

      const actual = relativeToDate('30 years from now');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 15 months from now Date', () => {
      const expected = new Date();
      expected.setMonth(expected.getMonth() + 15);

      const actual = relativeToDate('15 months from now');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 440 days from now Date', () => {
      const expected = new Date();
      expected.setDate(expected.getDate() + 440);

      const actual = relativeToDate('440 days from now');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 65 hours from now Date', () => {
      const expected = new Date();
      expected.setHours(expected.getHours() + 65);

      const actual = relativeToDate('65 hours from now');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 79 minutes from now Date', () => {
      const expected = new Date();
      expected.setMinutes(expected.getMinutes() + 79);

      const actual = relativeToDate('79 minutes from now');

      assert.equal(actual.toString(), expected.toString());
    });

    it('should return a 300 seconds from now Date', () => {
      const expected = new Date();
      expected.setSeconds(expected.getSeconds() + 300);

      const actual = relativeToDate('300 seconds from now');

      assert.equal(actual.toString(), expected.toString());
    });
  });
});
