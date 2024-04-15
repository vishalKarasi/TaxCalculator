const form = document.querySelector(".tax-form");
const submitBtn = document.querySelector(".btn-primary");

const popupOverlay = document.querySelector(".overlay");
const popupAmount = document.querySelector("#amount");
const popupCloseBtn = document.querySelector("#popup-close");

// Function to validate inputs
function validateInputs(inputFields) {
  let isValid = true;
  inputFields.forEach((inputField) => {
    const value = inputField.value.trim();
    const isValidInput = /^\d+(\.\d+)?$/.test(value);
    inputField.nextElementSibling.style.display = isValidInput
      ? "none"
      : "block";
    if (!isValidInput) isValid = false;
  });
  return isValid;
}

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

// Event listener for closing the popup
popupCloseBtn.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

// Event listener for form submission
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputFields = form.querySelectorAll("input[type='text']");
  if (validateInputs(inputFields)) {
    const annualIncome = parseFloat(
      document.getElementById("annual-income").value
    );
    const extraIncome = parseFloat(
      document.getElementById("extra-income").value
    );
    const deductions = parseFloat(
      document.getElementById("applicable-deduction").value
    );
    const ageGroup = document.getElementById("age-group").value;

    const overallIncome = calculateTax(
      annualIncome,
      extraIncome,
      deductions,
      ageGroup
    );

    // display result in popup
    popupAmount.textContent = overallIncome.toFixed(2);
    popupOverlay.style.display = "flex";
  }
});
