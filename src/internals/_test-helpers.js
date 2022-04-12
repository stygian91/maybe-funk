import { curry2, curry3 } from "../function/curry";

export const expectValue = curry3((type, expectedValue, actual) =>
  expect(actual.equals(type.of(expectedValue))).toEqual(true)
);

export const expectType = curry2((type, tbd) =>
  expect(tbd instanceof type).toEqual(true)
);
