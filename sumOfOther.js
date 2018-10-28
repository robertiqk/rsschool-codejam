function sumOfOther(array) {
  const resultArray = array;
  const sum = resultArray.reduce((acc, curr) => acc + curr);
  return resultArray.map(item => sum - item);
}
