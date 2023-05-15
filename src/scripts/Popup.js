export default class Popup {
  constructor(popupElement) {
    this._popup = document.querySelector(popupElement)
    this._closeButton = this._popup.querySelector(".popup__close")
    this._handleEscapeClose = this._handleEscapeClose.bind(this)
  }

  // Открытие попапа
  open() {
    document.addEventListener("keydown", this._handleEscapeClose)
    this._popup.classList.add("popup_opened")
  }

  // Закрытие попапа
  close() {
    this._popup.classList.remove("popup_opened")
    document.removeEventListener("keydown", this._handleEscapeClose)
  }

  // Закрытие по нажатию на Esc
  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close()
    }
  }

  // Закрытие по нажатию на оверлей
  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close()
    }
  }

  // Слушатели событий закрытия попапов
  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close()
    })

    this._popup.addEventListener("click", (evt) => {
      this._handleOverlayClose(evt)
    })
  }
}
