
// // Объявление переменных
// export const options = {
//   // formSelector: '.popup__form',
//   submitSelector: '.popup__save',
//   inputSelector: '.popup__form-item',
//   inputSectionSelector: '.popup__form-input',
//   inputErrorSelector: '.popup__form-error',
//   inputErrorClass: 'popup__form-error_active',
//   disabledButtonClass: 'popup__save_inactive',
// };

// // Создание класса валидации формы
// export default class FormValidator {
//   constructor(options, formElement) {
//     // this._options = options;
//     this._formElement = formElement;
//     this._disabledButtonClass = options.disabledButtonClass;
//     this._inputErrorSelector = options.inputErrorSelector;
//     this._inputErrorClass = options.inputErrorClass;
//     this._inputSectionSelector = options.inputSectionSelector;
//     this._inputList = this._formElement.querySelectorAll(options.inputSelector);
//     this._submitButton = this._formElement.querySelector(options.submitSelector);
//   }

//   // enableValidation = (options) => {
//   //   const forms = Array.from(document.querySelectorAll(options.formSelector));

//   //   forms.forEach(formElement => {
//   //     setEventListeners(formElement, options);
//   //   });
//   // };

//   enableValidation = () => {
//     this._setEventListeners();
//     this._toggleButtonState(this._submitButton, this._inputList);
//   }  

//   // enableValidation(options);





// // const hiddenError = (errorElement, inputErrorClass) => {
// //   const
// //     errorElement.textContent = '';
// //   errorElement.classList.remove(inputErrorClass);
// // }

// // const showError = (errorElement, message, inputErrorClass) => {
// //   const
// //     errorElement.textContent = message;
// //   errorElement.classList.add(inputErrorClass);
// // };

//   _hiddenError = (errorElement) => {
//     const errorElement = this._formElement.querySelector(`.${errorElement.id}-error`);
//     errorElement.textContent = '';
//     errorElement.classList.remove(this._inputErrorClass);
//   }

//   _showError = (errorElement, message) => {
//     errorElement.textContent = message;
//     errorElement.classList.add(this._inputErrorClass);
//   };





//   // const toggleInputState = (inputElement, options) => {
//   //   const isValid = inputElement.validity.valid;
//   //   const inputSectionElement = inputElement.closest(options.inputSectionSelector);
//   //   const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);

//   //   if (isValid) {
//   //     hiddenError(errorElement, options.inputErrorClass);
//   //   } else {
//   //     showError(errorElement, inputElement.validationMessage, options.inputErrorClass);
//   //   };
//   // };

//   _toggleInputState = (inputElement, options) => {
//     const isValid = inputElement.validity.valid;
//     const inputSectionElement = inputElement.closest(this._inputSectionSelector);
//     const errorElement = inputSectionElement.querySelector(this._inputErrorSelector);

//     if (isValid) {
//       this._hiddenError(errorElement);
//     } else {
//       this._showError(errorElement);
//     };
//   };





//   // const enableButton = (submitButton, disabledButtonClass) => {
//   //   submitButton.removeAttribute('disabled');
//   //   submitButton.classList.remove(disabledButtonClass);
//   // };

//   // const disableButton = (submitButton, disabledButtonClass) => {
//   //   submitButton.setAttribute('disabled', true);
//   //   submitButton.classList.add(disabledButtonClass);
//   // };

//   _enableButton = (submitButton) => {
//     submitButton.removeAttribute('disabled');
//     submitButton.classList.remove(this._disabledButtonClass);
//   };

//   _disableButton = (submitButton) => {
//     submitButton.setAttribute('disabled', true);
//     submitButton.classList.add(this._disabledButtonClass);
//   };


  


//   // const toggleButtonState = (inputs, submitButton, disabledButtonClass) => {
//   //   const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

//   //   if (formIsValid) {
//   //     enableButton(submitButton, disabledButtonClass);
//   //   } else {
//   //     disableButton(submitButton, disabledButtonClass);
//   //   }
//   // };

//   _toggleButtonState = (inputs, submitButton) => {
//     const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

//     if (formIsValid) {
//       this._enableButton(submitButton, this._disabledButtonClass);
//     } else {
//       this._disableButton(submitButton, this._disabledButtonClass);
//     }
//   };





//   // const setEventListeners = (formElement, options) => {
//   //   const submitButton = formElement.querySelector(options.submitSelector);
//   //   const inputs = Array.from(formElement.querySelectorAll(options.inputSelector));

//   //   for (let i = 0; i < inputs.length; i++) {
//   //     const inputElement = inputs[i];

//   //     inputElement.addEventListener('input', () => {
//   //       toggleInputState(inputElement, options)
//   //       toggleButtonState(inputs, submitButton, options.disabledButtonClass);
//   //     });
//   //   };
//   //   toggleButtonState(inputs, submitButton, options.disabledButtonClass);
//   // };

//   _setEventListeners = (formElement, options) => {
//     const submitButton = formElement.querySelector(options.submitSelector);
//     const inputs = Array.from(formElement.querySelectorAll(options.inputSelector));

//     for (let i = 0; i < inputs.length; i++) {
//       const inputElement = inputs[i];

//       inputElement.addEventListener('input', () => {
//         toggleInputState(inputElement, options)
//         toggleButtonState(inputs, submitButton, this._disabledButtonClass);
//       });
//     };
//     toggleButtonState(inputs, submitButton, this._disabledButtonClass);
//   };
// };