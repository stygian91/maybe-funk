import * as M from "../../src";

describe('converge', () => {
  test('empty branch functions list', () => {
    const conv = (x) => x;
    const list = [1, 2, 3];

    expect(M.converge(conv) ([]) (list)).toEqual([]);
    expect(list).toEqual([1, 2, 3]);
  });

  test('single branch fn', () => {
    const branchFns = [x => x + 1];
    const conv = xs => xs.map(x => x * 2);

    expect(M.converge(conv) (branchFns) (42)).toEqual([86]);
  });

  test('simple', () => {
    const xs = [1, 2, 3, 4, 5];
    const sum = (list) => list.reduce((acc, curr) => acc + curr, 0)
    const len = (list) => list.length;
    const conv = (pair) => pair[0] / pair[1];
    const average = M.converge(conv) ([sum, len]);

    expect(average(xs)).toEqual(3);
    expect(xs).toEqual([1, 2, 3, 4, 5]);
  });
});
