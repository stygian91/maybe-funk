import Maybe from "../data-structures/maybe";

/**
 * Returns the first element of an iterable that passes the condition function.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#built-in_iterables
 * @param {(x: any) => boolean} condFn
 * @returns {(list: Iterable<any>) => Maybe}
 */
const find = (condFn) => (list) => {
  for (const element of list) {
    if (condFn(element)) {
      return Maybe.of(element);
    }
  }

  return Maybe.of(null);
};

export default find;
