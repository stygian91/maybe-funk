import * as M from "../../src/";

describe('curry', () => {
  test('nullary', () => {
    const func = () => [42];
    const curried = M.curry(func);

    expect(curried()).toEqual([42]);
  });

  test('unary', () => {
    const func = (a) => [a];
    const curried = M.curry(func);

    expect(curried(99)).toEqual([99]);
  });

  test('ternary', () => {
    const func = (a, b, c) => [a, b, c];
    const curried = M.curry(func);

    expect(curried(1) (2) (3)).toEqual([1, 2, 3]);
  });

  test('multiple calls', () => {
    const func = (a, b, c) => [a, b, c];
    const curried = M.curry(func);
    const curried2 = curried(2);

    expect(curried(1) (2) (3)).toEqual([1, 2, 3]);
    expect(curried(1) (2) (3)).toEqual([1, 2, 3]);
    expect(curried2(3) (4)).toEqual([2, 3, 4]);
    expect(curried2(4) (5)).toEqual([2, 4, 5]);
  });

  test('curry1', () => {
    const fn = (a) => [a];
    const curried = M.curry1(fn);

    expect(curried(1)).toEqual([1]);
  });

  test('curry2', () => {
    const fn = (a, b) => [a, b];
    const curried = M.curry2(fn);

    expect(curried(1) (2)).toEqual([1, 2]);
  });

  test('curry3', () => {
    const fn = (a, b, c) => [a, b, c];
    const curried = M.curry3(fn);

    expect(curried(1) (2) (3)).toEqual([1, 2, 3]);
  });

  test('curry4', () => {
    const fn = (a, b, c, d) => [a, b, c, d];
    const curried = M.curry4(fn);

    expect(curried(1) (2) (3) (4)).toEqual([1, 2, 3, 4]);
  });

  test('curry5', () => {
    const fn = (a, b, c, d, e) => [a, b, c, d, e];
    const curried = M.curry5(fn);
    const curried2 = curried(2);

    expect(curried(1) (2) (3) (4) (5)).toEqual([1, 2, 3, 4, 5]);
    expect(curried2(3) (4) (5) (6)).toEqual([2, 3, 4, 5, 6]);
  });
});
