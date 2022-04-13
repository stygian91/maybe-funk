import Maybe from "../data-structures/maybe";
import findLastIndex from "./findLastIndex";

/**
 * Finds the last element that passes the condition function.
 *
 * @param {(x: any) => boolean} condFn
 * @returns {(list: any[]) => Maybe}
 */
const findLast = (condFn) => (list) => {
  if (Array.isArray(list)) {
    return findLastIndex(condFn)(list).map((index) => list[index]);
  }

  let last;
  for (const element of list) {
    if (condFn(element)) {
      last = element;
    }
  }

  return Maybe.of(last);
}

export default findLast;
