
import * as M from "../../src/";

test("always returns whatever is given to it", () => {
  const id = M.identity;
  expect(id(1)).toEqual(1);
  expect(id("a")).toEqual("a");
  expect(id()).toEqual(undefined);
});
