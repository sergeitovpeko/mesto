import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
// Создание сущности карточки в попапе
  constructor(popupSelector) {
    super(popupSelector);
    this._bigImage = this._popup.querySelector('.popup__image');
    this._nameImage = this._popup.querySelector('.popup__image-name');
  }

// Метод открытия карточки
  open(name, link) {
    super.open();
    this._bigImage.src = link;
    this._bigImage.alt = name;
    this._nameImage.textContent = name;
  }
}