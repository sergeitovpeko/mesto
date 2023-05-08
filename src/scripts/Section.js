export default class Section {
  constructor({renderer}, container) {
    this._renderer = renderer;
    this._container = container;
  }

  // Перебор массива карточек
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

  // Добавление карточек на страницу
  addItem(element) {
    this._container.prepend(element);
  }
}