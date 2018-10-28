module.exports = function sumOfOther(array) {
  const resultArray = array;
  if (resultArray.length < 1) return [];

  const sum = resultArray.reduce((acc, curr) => acc + curr);
  return resultArray.map(item => sum - item);
}
