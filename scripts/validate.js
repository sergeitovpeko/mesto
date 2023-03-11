// Валидация форм
const hiddenError = (errorElement, inputErrorClass) => {
  errorElement.textContent = '';
  errorElement.classList.remove(inputErrorClass);
};

const showError = (errorElement, message, inputErrorClass) => {
  errorElement.textContent = message;
  errorElement.classList.add(inputErrorClass);
};

const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid;
  const inputSectionElement = inputElement.closest(options.inputSectionSelector);
  const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);

  if (isValid) {
    hiddenError(errorElement, options.inputErrorClass);
  } else {
    showError(errorElement, inputElement.validationMessage, options.inputErrorClass);
  };
};

const enableButton = (submitButton, disabledButtonClass) => {
  submitButton.removeAttribute('disabled');
  submitButton.classList.remove(disabledButtonClass);
};

const disableButton = (submitButton, disabledButtonClass) => {
  submitButton.setAttribute('disabled', true);
  submitButton.classList.add(disabledButtonClass);
};

const toggleButtonState = (inputs, submitButton, disabledButtonClass) => {
  const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

  if (formIsValid) {
    enableButton(submitButton, disabledButtonClass);
  } else {
    disableButton(submitButton, disabledButtonClass);
  }
};

const setEventListeners = (formElement, options) => {
  const submitButton = formElement.querySelector(options.submitSelector);
  const inputs = Array.from(formElement.querySelectorAll(options.inputSelector));



  for (let i = 0; i < inputs.length; i++) {
    const inputElement = inputs[i];

    inputElement.addEventListener('input', () => {
      toggleInputState(inputElement, options)
      toggleButtonState(inputs, submitButton, options.disabledButtonClass);
    });
  };
  toggleButtonState(inputs, submitButton, options.disabledButtonClass);
};

const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach(formElement => {
    setEventListeners(formElement, options);
  });
};