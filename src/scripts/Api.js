export default class Api {
  constructor(params) {
    this.url = params.url;
    this.headers = params.headers;
  }

  getResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: this.headers,
    }).then(this.getResponse);
  }

  editUserInfo(item) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: item.name,
        about: item.about,
      })
    }).then(this.getResponse);
  }

  editUserPhoto(item) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: item.link
      })
    }).then(this.getResponse);
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      method: 'GET',
      headers: this.headers,
    }).then(this.getResponse);
  }

  addNewCard(item) {
    return fetch(`${this.url}/users/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      })
    }).then(this.getResponse);
  }

  deleteCard() {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this.getResponse);
  }

  likeCard() {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers,
    }).then(this.getResponse);
  }

  dislikeCard() {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this.getResponse);
  }
}