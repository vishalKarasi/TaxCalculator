const { validateInputs } = require("../assets/validateInputs.js");

test("validateInputs function should return true for valid inputs", () => {
  const inputFields = [
    { value: "123" },
    { value: "456.78" },
    { value: "0.99" },
  ];
  expect(validateInputs(inputFields)).toBe(true);
});

test("validateInputs function should return false for invalid inputs", () => {
  const inputFields = [{ value: "abc" }, { value: "12x" }, { value: "-5" }];
  expect(validateInputs(inputFields)).toBe(false);
});
