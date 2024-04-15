const { calculateTax } = require("../assets/calculateTax.js");

describe("calculateTax function", () => {
  // Test cases for different scenarios

  // Test case 1: Below 40 age group, taxable income greater than 800000
  test("calculates tax correctly for below-40 age group with taxable income above 800000", () => {
    const annualIncome = 1000000;
    const extraIncome = 50000;
    const deductions = 20000;
    const ageGroup = "below-40";

    expect(calculateTax(annualIncome, extraIncome, deductions, ageGroup)).toBe(
      961000
    );
  });

  // Test case 2: 40-60 age group, taxable income greater than 800000
  test("calculates tax correctly for 40-60 age group with taxable income above 800000", () => {
    const annualIncome = 1200000;
    const extraIncome = 60000;
    const deductions = 25000;
    const ageGroup = "40-60";

    expect(calculateTax(annualIncome, extraIncome, deductions, ageGroup)).toBe(
      1061000
    );
  });

  // Test case 3: Above 60 age group, taxable income greater than 800000
  test("calculates tax correctly for above-60 age group with taxable income above 800000", () => {
    const annualIncome = 900000;
    const extraIncome = 40000;
    const deductions = 15000;
    const ageGroup = "above-60";

    expect(calculateTax(annualIncome, extraIncome, deductions, ageGroup)).toBe(
      912500
    );
  });

  // Test case 4: Taxable income less than or equal to 800000
  test("calculates tax correctly for taxable income less than or equal to 800000", () => {
    const annualIncome = 600000;
    const extraIncome = 30000;
    const deductions = 10000;
    const ageGroup = "below-40";

    expect(calculateTax(annualIncome, extraIncome, deductions, ageGroup)).toBe(
      620000
    );
  });
});
