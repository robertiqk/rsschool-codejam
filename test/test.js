var assert = require('assert');

const sumOfOther = require('../sumOfOther.js');

describe('sumOfOther : Should return new Array, where each item is the sum of other items.', () => {
  it('Test 1', () => {
    const resultArray = sumOfOther([5, 4, 9, 13, 21]);
    assert.deepEqual(resultArray, [47, 48, 43, 39, 31]);
  });

  it('Test 2', () => {
    const resultArray = sumOfOther([1, 1, 1]);
    assert.deepEqual(resultArray, [2, 2, 2]);
  });

  it('Test 3', () => {
    const resultArray = sumOfOther([154, 543, 1024, 2, 12, 35]);
    assert.deepEqual(resultArray, [1616, 1227, 746, 1768, 1758, 1735]);
  });

  it('Test 4', () => {
    const resultArray = sumOfOther([]);
    assert.deepEqual(resultArray, []);
  });

  it('Test 5', () => {
    const resultArray = sumOfOther([1]);
    assert.deepEqual(resultArray, [0]);
  });
});
