/**
 * Goes through with operations on the value.
 * Does nothing when the value is nil.
 *
 * @class
 */
class Maybe {
  constructor(x) {
    this.value = x;
  }

  static of(x) {
    return new Maybe(x);
  }

  get isNothing() {
    return this.value === null || this.value === undefined;
  }

  get isJust() {
    return !this.isNothing;
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.value));
  }

  equals(other) {
    return (this.isNothing && other.isNothing) || this.value === other.value;
  }

  chain(fn) {
    return this.map(fn).join();
  }

  join() {
    return this.isNothing ? this : this.value;
  }

  getValue() {
    return this.value;
  }
}

export default Maybe;
