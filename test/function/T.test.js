import * as M from "../../src";

test('T function', () => {
  expect(M.T()).toEqual(true);
  expect(M.T(false)).toEqual(true);
});
