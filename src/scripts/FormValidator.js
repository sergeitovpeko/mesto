// Валидация форм
export default class FormValidator {
  constructor(options, formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(options.inputSelector));
    this._submitButton = this._formElement.querySelector(options.submitSelector);
    this._inputSectionSelector = options.inputSectionSelector;
    this._inputErrorSelector = options.inputErrorSelector;
    this._inputErrorClass = options.inputErrorClass;
    this._disabledButtonClass = options.disabledButtonClass
  }

  _hiddenError = (errorElement) => {
    errorElement.textContent = '';
    errorElement.classList.remove(this._inputErrorClass);
  };

  _showError = (errorElement, message) => {
    errorElement.textContent = message;
    errorElement.classList.add(this._inputErrorClass);
  };

  _toggleInputState = (inputElement) => {
    const inputSectionElement = inputElement.closest(this._inputSectionSelector);
    const errorElement = inputSectionElement.querySelector(this._inputErrorSelector);

    if (inputElement.validity.valid) {
      this._hiddenError(errorElement);
    } else {
      this._showError(errorElement, inputElement.validationMessage);
    };
  };

  _enableButton = () => {
    this._submitButton.removeAttribute('disabled');
    this._submitButton.classList.remove(this._disabledButtonClass);
  };

  disableButton = () => {
    this._submitButton.setAttribute('disabled', true);
    this._submitButton.classList.add(this._disabledButtonClass);
  };

  _toggleButtonState = () => {
    const formIsValid = this._inputList.every(inputElement => inputElement.validity.valid);

    if (formIsValid) {
      this._enableButton();
    } else {
      this.disableButton();
    }
  };

  _setEventListeners = () => {
    for (let i = 0; i < this._inputList.length; i++) {
      const inputElement = this._inputList[i];

      inputElement.addEventListener('input', () => {
        this._toggleInputState(inputElement)
        this._toggleButtonState();
      });
    }
    this._toggleButtonState();
  };

  enableValidation = () => {
    this._setEventListeners();
  };
};