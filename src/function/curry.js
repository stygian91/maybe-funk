const _curry = (length, args, func) => (arg) => {
  const newArgs = [...args];
  if (length) {
    newArgs.push(arg);
  }

  if (newArgs.length >= length) {
    return func(...newArgs);
  }

  return _curry(length, newArgs, func);
};

/**
 * Curries the provided function.
 *
 * @param {function} func
 * @returns {function}
 */
const curry = (func) => _curry(func.length, [], func);

export default curry;

export const curry2 = (fn) => (a) => (b) => fn(a, b);

export const curry3 = (fn) => (a) => (b) => (c) => fn(a, b, c);

export const curry4 = (fn) => (a) => (b) => (c) => (d) => fn(a, b, c, d);

export const curry5 = (fn) => (a) => (b) => (c) => (d) => (e) => fn(a, b, c, d, e);
