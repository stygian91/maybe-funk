import { curry3 } from "./curry";

/**
 * Takes a list of functions and a converging function.
 * Returns a new function that takes a variable number of arguments,
 * which will be applied to each of the branching functions.
 * The results of the branching functions will be passed to the converging function.
 *
 * @param {function} convergingFn
 * @param {function[]} branchingFns
 * @param {any}
 * @returns {any}
 */
const converge = (convergingFn, branchingFns, arg) =>
  convergingFn(branchingFns.map((branchingFn) => branchingFn(arg)));

export default curry3(converge);
