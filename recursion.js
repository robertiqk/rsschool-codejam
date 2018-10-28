function recursion(obj) {
  const result = [];
  const depth = 0;

  function throughObject(currValue, left, right, curdepth) {

    if (Array.isArray(result[curdepth])) {
      result[curdepth].push(currValue);
    } else {
      result[curdepth] = [currValue];
    }

    if (left === undefined && right === undefined) return;

    if (left !== undefined) {
      throughObject(left.value, left.left, left.right, curdepth + 1);
    }

    if (right !== undefined) {
      throughObject(right.value, right.left, right.right, curdepth + 1);
    }
  }

  throughObject(obj.value, obj.left, obj.right, depth);
  return result;
}
