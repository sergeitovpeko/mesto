import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
// Создание сущности для формы
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsList = this._form.querySelector('.popup__form-item');
  }

// Берем значения полей инпутов
  _getInputValues() {
    this._inputsValues();
// Перебираем массив значений полей инпутов
    this._inputsList.forEach((item) => {
      this._inputsValues[item.name] = [item.value];
    });
// Возвращаем значения инпутов
    return this._inputsValues;
  }

// Перезаписанный метод закрытия попапов форм
  setEventListeners() {
    super.setEventListeners();
    evt.preventDefault();
// Обработчик сабмита
    this._form.addEventListener('submit', () => {
      this._submitForm(this._getInputValues());
    });    
  }

// Метод закрытия форм
  close() {
    super.close();
  }
}