/**
 * Takes a list of functions and returns a new function
 * that is a composition of all the functions that were passed.
 * The functions are called left-to-right.
 * An example with three functions (f, g, h) => (arg) => h(g(f(arg)))
 *
 * @param  {function[]} funcs
 * @returns {function}
 */
const pipe = (funcs) => (arg) =>
  funcs.reduce((prevResult, currentFn) => currentFn(prevResult), arg);

export default pipe;
