import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._confirmDeleteHandler = confirmDeleteHandler;
    this._confirmButton = this._popup.querySelector('.popup__save');
  }

  setEventListeners() {
    super.setEventListeners();
    
  }
}