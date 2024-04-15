// for testing purpose

function validateInputs(inputFields) {
  let isValid = true;
  inputFields.forEach((inputField) => {
    const value = inputField.value.trim();
    const isValidInput = /^\d+(\.\d+)?$/.test(value);
    if (!isValidInput) isValid = false;
  });
  return isValid;
}

module.exports = { validateInputs };
