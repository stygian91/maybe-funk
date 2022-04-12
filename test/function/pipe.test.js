import * as M from "../../src";

describe('pipe', () => {
  test('no functions', () => {
    expect(M.pipe([]) (42)).toEqual(42);
  });

  test('one function', () => {
    const fn = (x) => x * 2;
    expect(M.pipe([fn]) (18)).toEqual(36);
  });

  test('multiple functions', () => {
    const add2 = (x) => x + 2;
    const mul2 = (x) => x * 2;
    const sub1 = (x) => x - 1;

    expect(M.pipe([add2, mul2, sub1]) (3)).toEqual(9);
  });
});
