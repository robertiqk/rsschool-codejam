function make(...args) {
  const tempArr = [];

  function func(...secArgs) {
    if (typeof secArgs[0] !== 'function') {
      tempArr.push(...secArgs);
      return func;
    }
    return tempArr.reduce(secArgs[0]);
  }

  return func(...args);
}
