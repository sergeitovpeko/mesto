// Cоздаём класс карточки
export default class Card {
  constructor(name, link, cardTemplate, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
// Возвращаем разметку из HTML и клонируем элемент списка
    return this._cardTemplate.content
      .querySelector('.elements__list-item').cloneNode(true);
  }

// Готовим карточки к публикации
  createCard = () => {
// Переносим разметку в приватное поле
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.elements__image');
    this._elementTitle = this._element.querySelector('.elements__title');
    this._buttonDelete = this._element.querySelector('.elements__button_delete');
    this._buttonLike = this._element.querySelector('.elements__button_like');
    this._setEventListeners();

// Передаем данные элемента списка
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;

// Возвращаем элемент обратно на страницу
    return this._element;
  }

// Обработчкики событий кликов по карточкам
  _setEventListeners() {
    this._buttonDelete.addEventListener('click', () => {
      this._handleDelete();
    });


    this._buttonLike.addEventListener('click', () => {
      this._handleLike();
    });


    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._elementImage);
    });
  }

// Метод удаления карточки
  _handleDelete() {
    this._element.remove();
  }

// Метод лайка карточки
  _handleLike() {
    this._buttonLike.classList.toggle('elements__button_like_active');
  }
};