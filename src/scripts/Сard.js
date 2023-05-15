export default class Card {
  constructor(config, data, cardTemplate, userId,
      handleCardClick, handleDeleteClick, handleLikeCard) {
    this.config = config;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardTemplate = cardTemplate;
    this._handleLikeCard = handleLikeCard;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    // Возвращаем разметку из HTML и клонируем элемент списка
    return this._cardTemplate.content
      .querySelector('.elements__list-item').cloneNode(true);
  }

  getCardId() {
    return this._cardId;
  }

  // Готовим карточки к публикации
  createCard = () => {
    // Переносим разметку в приватное поле
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(this.config.cardImage);
    this._elementTitle = this._element.querySelector(this.config.cardTitle);
    this._buttonDelete = this._element.querySelector(this.config.cardDelete);
    this._buttonLike = this._element.querySelector(this.config.cardLike);
    this._quantityLikes = this._element.querySelector(this.config.cardCount);
    this._setEventListeners();

    if (this._ownerId !== this._userId) {
      this._buttonDelete.remove();
    }

    // Передаем данные элемента списка
    this.handleLike(this._likes);
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;

    // Возвращаем элемент обратно на страницу
    return this._element;
  }

  // Обработчики событий кликов по карточкам
  _setEventListeners() {
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteClick(this, this._cardId);
    });

    this._buttonLike.addEventListener('click', () => {
      this._handleLikeCard(this._cardId, this._isLiked, this);
    });

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  handleDelete() {
    this._element.remove();
    this._element = null;
  }

  // Методы лайка карточки
  _checkUserLike() {
    return this._likes.some(owner => owner._id === this._userId);
  }

  _handleLikeButton(isLiked) {
    if (isLiked) {
      this._buttonLike.classList.add('elements__button_like_active');
    } else {
      this._buttonLike.classList.remove('elements__button_like_active');
    }
  }  

  handleLike(likes) {
    this._likes = likes;
    this._isLiked = this._checkUserLike();
    this._quantityLikes.textContent = likes.length;
    this._handleLikeButton(this._isLiked);
  }
}