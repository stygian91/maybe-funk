import Maybe from "../data-structures/maybe";

/**
 * Returns the index of the first element that passes the condition function.
 *
 * @param {(x: any) => boolean} condFn
 * @returns {(list: any[]) => Maybe}
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
