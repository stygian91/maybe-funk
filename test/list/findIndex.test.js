import * as M from "../../src";
import { expectType } from "../../src/internals/_test-helpers";

describe('findIndex', () => {
  test('just', () => {
    const list = [1, 5, 2, 3];
    const gt2 = x => x > 2;
    const res = M.findIndex(gt2) (list);

    expectType(M.Maybe) (res);
    expect(res.isJust).toEqual(true);
    expect(res.isNothing).toEqual(false);
    expect(res.join()).toEqual(1);
    expect(list).toEqual([1, 5, 2, 3]);
  });

  test('nothing', () => {
    const list = [1, 5, 2, 3];
    const gt10 = x => x > 10;
    const res = M.findIndex(gt10) (list);

    expectType(M.Maybe) (res);
    expect(res.isNothing).toEqual(true);
  });
});

