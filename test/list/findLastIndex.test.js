import * as M from "../../src";

describe('findLastIndex', () => {
  test('finds last index that matches', () => {
    const fn = x => x > 10;
    const list = [2, 3, 11, 4, 8, 10, 11, 5];
    const list2 = [11, 3, 5];
    const result = M.findLastIndex(fn) (list);
    const result2 = M.findLastIndex(fn) (list2);

    expect(result.join()).toEqual(6);
    expect(result2.join()).toEqual(0);
    expect(list).toEqual([2, 3, 11, 4, 8, 10, 11, 5]);
    expect(list2).toEqual([11, 3, 5]);
  });

  test('returns nothing when no element matches', () => {
    const fn = x => x === 42;
    const list = [2, 3, 5, 10];
    const result = M.findLastIndex(fn) (list);

    expect(result.isNothing).toEqual(true);
  });

  test('returns nothing for an empty list', () => {
    const fn = x => x === 42;
    const list = [];
    const result = M.findLastIndex(fn) (list);

    expect(result.isNothing).toEqual(true);
  });

  test('works with single element list', () => {
    const fn = x => x === 42;
    const list = [33];
    const list2 = [42];
    const result = M.findLastIndex(fn) (list);
    const result2 = M.findLastIndex(fn) (list2);

    expect(result.isNothing).toEqual(true);
    expect(result2.join()).toEqual(0);
  });
});
