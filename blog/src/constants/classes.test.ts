import { expect, test } from "vitest"
import { MakeClass } from "../utilities/MakeClass"
import { CLASS } from "./classes"

test("Should generate correct class string from input.", () => {
  const result = MakeClass("flex", "justify-center", "items-center")

  expect(result).toBe("flex justify-center items-center")
})

test("Should generate correct class string from input with recursion.", () => {
  const result = MakeClass("flex", MakeClass("justify-center", "items-center"))

  expect(result).toBe("flex justify-center items-center")
})