const { validateInputs } = require("../assets/validateInputs.js");

describe("validateInputs function", () => {
  // Test for valid inputs
  test("should return true for valid inputs", () => {
    // Define input fields with valid values
    const inputFields = [
      { value: "123" },
      { value: "456.78" },
      { value: "0.99" },
    ];

    // Expect the function to return true
    expect(validateInputs(inputFields)).toBe(true);
  });

  // Test for invalid inputs
  test("should return false for invalid inputs", () => {
    // Define input fields with invalid values
    const inputFields = [{ value: "abc" }, { value: "12x" }, { value: "-5" }];

    // Expect the function to return false
    expect(validateInputs(inputFields)).toBe(false);
  });
});
