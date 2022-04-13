import findLastIndex from "./findLastIndex";

/**
 * Finds the last element that passes the condition function.
 *
 * @param {(x: any) => boolean} condFn
 * @returns {(list: any[]) => Maybe}
 */
const findLast = (condFn) => (list) =>
  findLastIndex(condFn)(list).map((index) => list[index]);

export default findLast;
