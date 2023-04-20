export default class Section {
// Создание сущности карточки
  constructor({ items, renderer }, container) {
    this._initialCards = items;
    this._renderer = renderer;
    this._container = container;
  }


// Перебор массива и добавление карточек
  renderItems() {
    this._initialCards.forEach((item) => {
      this.renderer(item);
    });
  }
  

// Добавление карточек на страницу
  addItem(element) {
    this._container.prepend(element);
  }
}