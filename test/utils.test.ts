import { test, expect } from "vitest";
import { createDate } from "./src/utils";

test("Get date from string", () => {
  expect(createDate("2024-08-06")).toStrictEqual(new Date("2024-08-06"));
});
