// Список переменных в формах

export const emptyCard = {
  name: "",
  link: "",
}
export const emptyURL = {
  avatar: "",
}
export const options = {
  imagePopup: "#image",
  deletePopup: "#delete",
  profilePopup: "#edit",
  avatarPopup: "#avatar",
  popupAdd: "#add",
  addForm: "#add-form",
  editForm: "#edit-form",
  avatarForm: "#avatar-form",
  nameSelector: ".profile__name",
  aboutSelector: ".profile__job",
  avatarSelector: ".profile__image",
  formSelector: ".popup__form",
  submitSelector: ".popup__save",
  inputSelector: ".popup__form-item",
  inputSectionSelector: ".popup__form-input",
  inputErrorSelector: ".popup__form-error",
  inputErrorClass: "popup__form-error_active",
  disabledButtonClass: "popup__save_inactive",
  cardImage: ".elements__image",
  cardTitle: ".elements__title",
  cardDelete: ".elements__button_delete",
  cardLike: ".elements__button_like",
  cardCount: ".elements__likes-quantity",
}

export const editButton = document.querySelector(".profile__button_type-edit")
export const addButton = document.querySelector(".profile__button_type-add")
export const avatarButton = document.querySelector(".profile__avatar-button")

export const container = document.querySelector(".elements__list")
export const cardTemplate = document.querySelector("#card-template")
