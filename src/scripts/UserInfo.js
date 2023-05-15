export default class UserInfo {
  constructor(config) {
    this._name = document.querySelector(config.nameSelector)
    this._about = document.querySelector(config.aboutSelector)
    this._avatar = document.querySelector(config.avatarSelector)
    this._id = ""
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
    }
  }

  setUserInfo(info) {
    this._name.textContent = info.name
    this._about.textContent = info.about
    this._avatar.src = info.avatar
    this._userId = info._id
  }
}
