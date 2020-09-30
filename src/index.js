const isArrayInvalid = (array) => {
  return (array === undefined || array.length === 0);
};
exports.min = function min (array) {
  if (isArrayInvalid(array)) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if (isArrayInvalid(array)) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (isArrayInvalid(array)) return 0;
  return array.reduce((a, b) => (a + b)) / array.length;
}
