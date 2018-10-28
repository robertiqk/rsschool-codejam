var assert = require('assert');

const sumOfOther = require('../sumOfOther.js');
const make = require('../make.js')

function sum(a, b) {
  return a + b;
}

describe('sumOfOther.js: Should return new Array, where each item is the sum of other items.', () => {
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

describe('make.js: Should accumulate arguments and return the sum after we send a function as a parameter', () => {
  it('Test 1', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });
});