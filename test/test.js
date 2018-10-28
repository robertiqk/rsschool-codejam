var assert = require('assert');

const sumOfOther = require('../sumOfOther.js');
const make = require('../make.js');
const recursion = require('../recursion.js');

function sum(a, b) {
  return a + b;
}

const tree1 = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
const tree2 = {"value":55,"left":{"value":49,"left":{"value":34}},"right":{"value":65,"left":{"value":32},"right":{"value":73}}};
const tree3 = {"value":250,"left":{"value":170,"left":{"value":160},"right":{"value":190, "left":{"value":165},"right":{"value":210,}}},"right":{"value":310,"left":{"value":240, "left":{"value":200},"right":{"value":255}},"right":{"value":350}}};

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

describe('recursion.js: Go through binary tree and return its value as an array which depends on tree\'s levels', () => {
  it('Test 1', () => {
    const result = recursion(tree1);
    assert.deepEqual(result, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('Test 2', () => {
    const result = recursion(tree2);
    assert.deepEqual(result, [[55], [49, 65], [34, 32, 73]]);
  });

  it('Test 3', () => {
    const result = recursion(tree3);
    assert.deepEqual(result, [[250], [170, 310], [160, 190, 240, 350], [165, 210, 200, 255]]);
  });
});