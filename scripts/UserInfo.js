export default class UserInfo {
  constructor({nameSelector, infoSelector}, ) {
    this._name = document.querySelector(nameSelector);
    this._info = document.querySelector(infoSelector);
  }

  getUserInfo({name, info}) {
    this._name.textContent = name;
    this._info.textContent = info;
  }

  setUserInfo() {
    return this.getUserInfo();
  }  
}