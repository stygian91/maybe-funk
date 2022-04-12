/**
 * Returns a new function that delays execution by returning a nullary function.
 *
 * @param {function} func
 * @returns {function}
 */
const thunkify = (func) => (arg) => () => func(arg);

export default thunkify;
