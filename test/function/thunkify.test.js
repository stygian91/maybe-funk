import * as M from "../../src/";

test("delays execution by returning a nullary function", () => {
  const func = (a) => a * 3;
  const thunkified = M.thunkify(func);
  const twoTimesThree = thunkified(2);

  expect(typeof twoTimesThree).toBe("function");
  expect(twoTimesThree()).toBe(6);
});
