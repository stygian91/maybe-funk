import { Maybe } from "../../src/data-structures";
import { expectType, expectValue } from "../../src/internals/_test-helpers";

describe('Maybe', () => {
  const expectMaybe = expectType(Maybe);
  const expectMaybeVal = expectValue(Maybe);

  test("it's a setoid", () => {
    const maybeNull1 = Maybe.of(null);
    const maybeNull2 = Maybe.of(null);
    const maybeA = Maybe.of("a");
    const maybeA1 = Maybe.of("a");
    const maybeB = Maybe.of("b");
    expect(maybeNull1.equals(maybeNull2)).toEqual(true);
    expect(maybeNull1.equals(maybeA)).toEqual(false);
    expect(maybeA.equals(maybeA1)).toEqual(true);
    expect(maybeA.equals(maybeB)).toEqual(false);
  });

  test("it joins values", () => {
    expect(Maybe.of(321).join()).toEqual(321);
    expect(Maybe.of(321).getValue()).toEqual(321);

    const maybeNull = Maybe.of(null).join();
    expect(maybeNull.getValue()).toEqual(null);
    expectMaybe(maybeNull);
    expectMaybeVal(null) (maybeNull);
  });

  test("it maps over values", () => {
    const maybe = Maybe.of("a");
    const maybeNull = Maybe.of(null);
    const fn = (x) => x.concat("bcd");
    const res = maybe.map(fn);

    expectMaybeVal("abcd") (res);
    expect(maybeNull.map(fn).isNothing).toEqual(true);
  });

  test("it recognises Just()", () => {
    expect(Maybe.of(123).isJust).toEqual(true);
    expect(Maybe.of(null).isJust).toEqual(false);
  });

  test("it chains", () => {
    expect(Maybe.of(20).chain((x) => x - 10)).toEqual(10);
  });
});

