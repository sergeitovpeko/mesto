export default class Section {
  constructor({ items, renderer }, container) {
    this._initialCards = items;
    this._renderer = renderer;
    this._container = container;
  }


  // Перебор массива карточек
  renderItems() {
    this._initialCards.forEach(item => {
      this._renderer(item);
    });
  }


  // Добавление карточек на страницу
  addItem(element) {
    this._container.prepend(element);
  }
}