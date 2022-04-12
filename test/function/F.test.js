import * as M from "../../src";

test('F function', () => {
  expect(M.F()).toEqual(false);
  expect(M.F(true)).toEqual(false);
});
