import { test, expect } from "vitest";
import { addDays, addMonths, addYears } from "./src/modifyFunctions";

test("Add day(s) in given date", () => {
  expect(addDays("2024-08-06", 6)).toStrictEqual(new Date("2024-08-12"));
});

test("Add month(s) in given date", () => {
  expect(addMonths("2024-08-06", 2)).toStrictEqual(new Date("2024-10-06"));
});

test("Add year(s) in given date", () => {
  expect(addYears("2024-08-06", 6)).toStrictEqual(new Date("2030-08-06"));
});
