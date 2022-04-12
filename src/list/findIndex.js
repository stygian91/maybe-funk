import Maybe from "../data-structures/maybe";

/**
 * Returns the index of the first element that passes the condition function.
 *
 * @param {function} condFn
 * @param {any[]} list
 * @returns {Maybe<number>}
 */
const findIndex = (condFn) => (list) => {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (condFn(element)) {
      return Maybe.of(index);
    }
  }

  return Maybe.of(null);
};

export default findIndex;
