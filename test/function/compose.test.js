import * as M from "../../src";

describe('compose', () => {
  test('no functions', () => {
    expect(M.compose([]) (42)).toEqual(42);
  });

  test('one function', () => {
    const fn = (x) => x * 2;
    expect(M.compose([fn]) (18)).toEqual(36);
  });

  test('multiple functions', () => {
    const add2 = (x) => x + 2;
    const mul2 = (x) => x * 2;
    const sub1 = (x) => x - 1;

    expect(M.compose([add2, mul2, sub1]) (3)).toEqual(6);
  });
});
