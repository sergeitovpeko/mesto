import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitForm) {
    super(popupElement)
    this._submitForm = submitForm
    this._form = this._popup.querySelector(".popup__form")
    this._inputsList = this._form.querySelectorAll(".popup__form-item")
    this._button = this._popup.querySelector(".popup__save")
    this._buttonTitle = this._button.textContent
  }

  open(init) {
    this._inputsList.forEach((input) => {
      input.value = init[input.name]
    })

    super.open()
  }

  updateText(text = "Сохранение. . .") {
    this._button.textContent = text === false ? this._buttonTitle : text
  }

  // Берем значения полей инпутов
  _getInputValues() {
    const output = {}
    // Перебираем массив значений полей инпутов
    this._inputsList.forEach((input) => {
      output[input.name] = input.value
    })
    // Возвращаем значения инпутов
    return output
  }

  // Перезаписанный метод закрытия попапов форм
  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._submitForm(this._getInputValues())
    })
  }

  // Метод закрытия форм
  close() {
    super.close()
    this._form.reset()
  }
}
