import ascend from "../../src/function/ascend";

test("ascend", () => {
  const list = [{ id: 2 }, { id: 3 }, { id: 1 }, { id: 2 }];
  const prop = (x) => (obj) => obj[x];
  const ascById = ascend(prop("id"));

  expect(ascById(list[0]) (list[1])).toEqual(-1);
  expect(ascById(list[0]) (list[3])).toEqual(0);
  expect(ascById(list[0]) (list[2])).toEqual(1);
});
