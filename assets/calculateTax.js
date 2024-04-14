// Function to calculate tax
function calculateTax(annualIncome, extraIncome, deductions, ageGroup) {
  let taxableIncome = annualIncome + extraIncome - deductions;
  let taxRate = 0;
  let taxAmount = 0;

  if (taxableIncome > 800000) {
    switch (ageGroup) {
      case "below-40":
        taxRate = 0.3;
        break;
      case "40-60":
        taxRate = 0.4;
        break;
      case "above-60":
        taxRate = 0.1;
        break;
    }
    taxAmount = (taxableIncome - 800000) * taxRate;
  }

  return taxableIncome - taxAmount;
}

module.exports = { calculateTax };
