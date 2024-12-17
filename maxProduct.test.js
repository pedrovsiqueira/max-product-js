const maxProduct = require("./maxProduct");

describe("maxProduct Function Tests", () => {
  test("Test Case 1: Path: 5 → 4", () => {
    const arr = [
      [5, 1],
      [2, 5],
      [3, 2],
      [4, 10],
    ];
    expect(maxProduct(arr)).toBe(20);
  });

  test("Test Case 2: Path: 3 → 5", () => {
    const arr = [
      [1, 1],
      [3, 1],
      [4, 1],
      [5, 1],
    ];
    expect(maxProduct(arr)).toBe(15);
  });

  test("Test Case 3: Path: 3 → 5 → 6", () => {
    const arr = [
      [1, 1],
      [3, 1],
      [4, 1],
      [5, 1],
      [6, 1],
    ];
    expect(maxProduct(arr)).toBe(24);
  });

  test("Edge Case: Empty Array", () => {
    const arr = [];
    expect(maxProduct(arr)).toBe(1);
  });

  test("Edge Case: Single Element", () => {
    const arr = [[7, 0]];
    expect(maxProduct(arr)).toBe(7);
  });

  test("Edge Case: Single Element with Skip", () => {
    const arr = [[9, 10]];
    expect(maxProduct(arr)).toBe(9);
  });

  test("Case with Large Skip Value", () => {
    const arr = [
      [6, 10],
      [8, 2],
      [4, 5],
      [2, 1],
    ];
    expect(maxProduct(arr)).toBe(8);
  });

  test("Case with Large Input Size", () => {
    const arr = Array.from({ length: 1000000 }, () => [1, 2]);
    expect(maxProduct(arr)).toBe(1);
  });

  test("Edge Case: Input is not an array", () => {
    expect(() => maxProduct(null)).toThrow(TypeError);
    expect(() => maxProduct(undefined)).toThrow(TypeError);
    expect(() => maxProduct(123)).toThrow(TypeError);
    expect(() => maxProduct("not an array")).toThrow(TypeError);
    expect(() => maxProduct({})).toThrow(TypeError);
  });
});
