export default class UserInfo {
  constructor({nameSelector, infoSelector}) {
    this._name = nameSelector;
    this._info = infoSelector;
  }

  getUserInfo({name, info}) {
    this._name.textContent = name;
    this._info.textContent = info;
  }

  setUserInfo() {
    return this.getUserInfo();
  }  
}