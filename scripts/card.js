// Cоздаём класс карточки
export default class Card {
  constructor(name, link, cardTemplate) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate () {
// Берём разметку из HTML и клонируем элемент списка
    const cardElement = document.querySelector('#card-template').content
      .querySelector('.elements__list-item').cloneNode(true);
    
// Возвращаем элемент списка
    return cardElement;
  }

// Готовим карточки к публикации
  createCard = () => {
// Переносим разметку в приватное поле
    this._element = this._getTemplate();
    this._setEventListeners();

// Передаем данные элемента списка
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;

// Возвращаем элемент обратно на страницу
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__button_delete').addEventListener('click', () => {
      this._handleDelete();
    });
    
    this._element.querySelector('.elements__button_like').addEventListener('click', () => {
      this._handleLike();
    });

    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._handleOpen();
    });
  }

  _handleDelete() {
    this._element.remove();
  }

  _handleLike() {
    this._element.querySelector('.elements__button_like')
      .classList.toggle('elements__button_like_active');
  }

  _handleOpen() {
    this._element.openPopup(imagePopup);
  }
};