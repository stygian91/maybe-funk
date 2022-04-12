import * as F from '../../src';

describe('tap', () => {
  test("runs a function on an argument and then returns that argument", () => {
    const example = "lorem";
    let result;
    const func = (string) => {
      result = `${string} ipsum`;
    };

    const output = F.tap(func) (example);
    expect(output).toEqual("lorem");
    expect(result).toEqual("lorem ipsum");
  });
});
