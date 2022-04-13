import * as M from "../../src";

const createIterable = (begin, end) => ({
  [Symbol.iterator]() {
    return {
      i: begin,
      next() {
        if (this.i < end) {
          return { value: this.i++, done: false };
        }

        return { value: undefined, done: true };
      },
    };
  },
});

describe('findLast', () => {
  test('finds last element that matches', () => {
    const fn = x => x > 10;
    const list = [2, 3, 12, 4, 8, 10, 11, 5];
    const list2 = [15, 3, 5];
    const result = M.findLast(fn) (list);
    const result2 = M.findLast(fn) (list2);

    expect(result.join()).toEqual(11);
    expect(result2.join()).toEqual(15);
    expect(list).toEqual([2, 3, 12, 4, 8, 10, 11, 5]);
    expect(list2).toEqual([15, 3, 5]);
  });

  test('returns nothing when no element matches', () => {
    const fn = x => x === 42;
    const list = [2, 3, 5, 10];
    const result = M.findLast(fn) (list);

    expect(result.isNothing).toEqual(true);
  });

  test('returns nothing for an empty list', () => {
    const fn = x => x === 42;
    const list = [];
    const result = M.findLast(fn) (list);

    expect(result.isNothing).toEqual(true);
  });

  test('works with iterables', () => {
    const iterable = createIterable(0, 5);
    const fn = x => x < 3;
    const result = M.findLast(fn) (iterable);
    expect(result.join()).toEqual(2);

    const iterable2 = createIterable(0, 5);
    const fn2 = x => x < 0;
    const result2 = M.findLast(fn2) (iterable2);
    expect(result2.isNothing).toEqual(true);
  });
});
