/**
 * Creates an ascending comparator function to be used with the sort function.
 * The `fn` argument must be a unary function that returns a value
 * that can be compared using the `>` and `<` operators,
 * this value will be used for the comparison.
 *
 * @see sort
 * @see descend
 * @param {function} fn
 * @param {any} a
 * @param {any} b
 * @returns {number}
 */
const ascend = (fn) => (a) => (b) => {
  const a1 = fn(a);
  const b1 = fn(b);

  if (a1 < b1) {
    return -1;
  }

  if (a1 > b1) {
    return 1;
  }

  return 0;
};

export default ascend;
