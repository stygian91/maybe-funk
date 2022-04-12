import pipe from "./pipe";

/**
 * Takes a list of functions and returns a new function
 * that is a composition of all the functions that were passed.
 * The functions are called right-to-left.
 * An example with three functions (f, g, h) => (arg) => f(g(h(arg)))
 *
 * @param  {function[]} funcs
 * @returns {function}
 */
const compose = (funcs) => pipe(funcs.slice().reverse());

export default compose;
