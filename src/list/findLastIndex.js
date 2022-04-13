import Maybe from "../data-structures/maybe";

/**
 * Finds the index of the last element that passes the condition function.
 *
 * @param {(x: any) => boolean} condFn
 * @returns {(list: any[]) => Maybe}
 */
const findLastIndex = (condFn) => (list) => {
  if (!list.length) {
    return Maybe.of(null);
  }

  for (let index = list.length - 1; index >= 0; index--) {
    const element = list[index];
    if (condFn(element)) {
      return Maybe.of(index);
    }
  }

  return Maybe.of(null);
};

export default findLastIndex;
