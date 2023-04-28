export default class Popup {
  constructor(popupElement) {
    this._popup = popupElement;
    this._closeButton = this._popup.querySelector('.popup__close');
  }

  // Открытие попапа
  open() {
    this._popup.classList.add('popup_opened');
    // document.addEventListener('click', this._handleEscapeClose);
  }

  // Закрытие попапа
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('click', this._handleEscapeClose);
  }


// Закрытие по нажатию на Esc
  _handleEscapeClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

// Закрытие по нажатию на оверлей
  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }


// Слушатели событий закрытия попапов
  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('click', (evt) => {
      this._handleOverlayClose(evt);
    });

    document.addEventListener('keydown', (evt) => {
      this._handleEscapeClose(evt);
    });
  }
}