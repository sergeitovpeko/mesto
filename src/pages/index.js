import "./index.css"
import Card from "../scripts/Сard.js"
import Section from "../scripts/Section.js"
import FormValidator from "../scripts/FormValidator.js"
import PopupWithImage from "../scripts/PopupWithImage.js"
import PopupWithConfirm from "../scripts/PopupWithConfirm"
import PopupWithForm from "../scripts/PopupWithForm.js"
import UserInfo from "../scripts/UserInfo.js"
import Api from "../scripts/Api"

import {
  emptyCard,
  emptyURL,
  options,
  editButton,
  addButton,
  avatarButton,
  container,
  cardTemplate,
} from "../utils/const.js"

// Создание формы добавления карточки
const formValidatorCard = new FormValidator(options, options.addForm);
formValidatorCard.enableValidation();

// Создание формы редактирования профиля
const formValidatorProfile = new FormValidator(options, options.editForm);
formValidatorProfile.enableValidation();

//Создание формы редактирования аватара
const formValidatorAvatar = new FormValidator(options, options.avatarForm)
formValidatorAvatar.enableValidation()

// Создание экземпляра попапа с картинкой
const popupOpenImage = new PopupWithImage(options.imagePopup)
popupOpenImage.setEventListeners()

const handleCardClick = (name, link) => {
  popupOpenImage.open(name, link)
}

const handleLikeCard = (cardId, isLiked, card) => {
  if (isLiked) {
    api
      .dislikeCard(cardId)
      .then((res) => {
        card.handleLike(res.likes)
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    api
      .likeCard(cardId)
      .then((res) => {
        card.handleLike(res.likes)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// Создание экземпляра карточек
const cardList = new Section(
  {
    renderer: renderCard,
  },
  container
)

const userInfo = new UserInfo(options)

const popupConfirmDelete = new PopupWithConfirm(
  options.deletePopup,
  handleConfirmClick
)
popupConfirmDelete.setEventListeners()

// Создание попапа профиля
const popupEditProfile = new PopupWithForm(
  options.profilePopup,
  editProfileInfo
)
popupEditProfile.setEventListeners()

// Слушатель попапа формы профиля
editButton.addEventListener("click", () => {
  popupEditProfile.open(userInfo.getUserInfo())
})

// Создание попапа редактирования аватара профиля
const popupEditAvatar = new PopupWithForm(
  options.avatarPopup,
  editProfileAvatar
)
popupEditAvatar.setEventListeners()

avatarButton.addEventListener("click", () => {
  popupEditAvatar.open(emptyURL)
  formValidatorAvatar.disableButton()
})

// Создание попапа добавления карточки
const popupAddCard = new PopupWithForm(options.popupAdd, (item) => {
  popupAddCard.updateText("Добавление. . .")
  createNewCard(item)
})
popupAddCard.setEventListeners()

// Слушатель добавления карточки
addButton.addEventListener("click", () => {
  popupAddCard.open(emptyCard)
  formValidatorCard.disableButton()
})

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "99359d1f-f5b1-4868-8efb-f0dafa2bda0d",
    "content-type": "application/json",
  },
})

let userId

// Добавление карточки на страницу
function renderCard(item) {
  const card = new Card(
    options,
    item,
    cardTemplate,
    userId,
    handleCardClick,
    handleDeleteClick,
    handleLikeCard
  )
  cardList.addItem(card.createCard())
}

function editProfileInfo(item) {
  popupEditProfile.updateText()
  api
    .editUserInfo(item)
    .then((res) => {
      userInfo.setUserInfo(res)
      popupEditProfile.close()
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      popupEditProfile.updateText(false)
    })
}

function editProfileAvatar(item) {
  popupEditAvatar.updateText()
  api
    .editUserPhoto(item)
    .then((res) => {
      userInfo.setUserInfo(res)
      popupEditAvatar.close()
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      popupEditAvatar.updateText(false)
    })
}

function createNewCard(item) {
  api
    .addNewCard(item)
    .then((res) => {
      renderCard(res)
      popupAddCard.close()
      formValidatorCard.disableButton()
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      popupAddCard.updateText(false)
    })
}

function handleDeleteClick(self, card) {
  popupConfirmDelete.open({ card: self, id: card })
}

function handleConfirmClick(item) {
  api
    .deleteCard(item.id)
    .then(() => {
      item.card.handleDelete()
      popupConfirmDelete.close()
    })
    .catch((error) => {
      console.log(error)
    })
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id
    userInfo.setUserInfo(userData)
    cardList.renderItems(cards.reverse())
  })
  .catch((error) => {
    console.log(error)
  })

// api
//   .getUserInfo()
//   .then((res) => {
//     userInfo.setUserInfo(res)
//     userId = res._id
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// api
//   .getInitialCards()
//   .then((res) => {
//     cardList.renderItems(res)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
