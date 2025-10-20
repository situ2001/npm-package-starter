import { test } from "vitest";
import pkgJson from "../package.json" assert { type: "json" };
import { expect } from "vitest";

const PLACEHOLDER = 'fill_yours_here';

test("package.json has no placeholders", () => {
  const jsonStr = JSON.stringify(pkgJson);
  expect(jsonStr.includes(PLACEHOLDER)).toBe(false);
});
