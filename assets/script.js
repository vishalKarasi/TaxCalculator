const helpIcons = document.querySelectorAll(".help img");
const errorIcons = document.querySelectorAll(".error img");

const form = document.querySelector(".tax-form");
const submitBtn = document.querySelector(".btn-primary");
const popupOverlay = document.querySelector(".overlay");
const popupAmount = document.querySelector("#amount");
const popupCloseBtn = document.querySelector("#popup-close");

// Show/hide tooltips or error messages
function toggleTooltip(element) {
  element.nextElementSibling.style.display =
    element.nextElementSibling.style.display === "block" ? "none" : "block";
}

// Event listeners for help icons and error icons
helpIcons.forEach((helpIcon) => {
  helpIcon.addEventListener("mouseover", () => toggleTooltip(helpIcon));
  helpIcon.addEventListener("mouseout", () => toggleTooltip(helpIcon));
});

errorIcons.forEach((errorIcon) => {
  errorIcon.addEventListener("mouseover", () => toggleTooltip(errorIcon));
  errorIcon.addEventListener("mouseout", () => toggleTooltip(errorIcon));
});

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
    const annualIncome =
      parseFloat(document.getElementById("annual-income").value) || 0;
    const extraIncome =
      parseFloat(document.getElementById("extra-income").value) || 0;
    const deductions =
      parseFloat(document.getElementById("applicable-deduction").value) || 0;
    const ageGroup = document.getElementById("age-group").value;
    const overallIncome = calculateTax(
      annualIncome,
      extraIncome,
      deductions,
      ageGroup
    );
    popupAmount.textContent = overallIncome.toFixed(2);
    popupOverlay.style.display = "flex";
  }
});
