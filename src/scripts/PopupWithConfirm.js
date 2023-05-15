import Popup from "./Popup.js"

export default class PopupWithConfirm extends Popup {
  constructor(popupElement, callback) {
    super(popupElement)
    this._confirm = callback
  }

  open(item) {
    this._item = item
    super.open()
  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault()

      this._confirm(this._item)
    })
  }
}
