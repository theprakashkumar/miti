import { test, expect } from "vitest";
import { getDay, getMonth } from "./src/getFunctions";

test("Get day from date", () => {
  expect(getDay("2024, 8, 6")).toBe("Tuesday");
});

test("Get day from date", () => {
  expect(getDay("2024, 8, 7")).toBe("Wednesday");
});

test("Get month name from date", () => {
  expect(getMonth("2024, 8, 6")).toBe("August");
});

test("Get month name from date", () => {
  expect(getMonth("2024, 1, 6")).toBe("January");
});
