import './index.css';
import Card from '../scripts/Сard.js';
import Section from '../scripts/Section.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithConfirm from '../scripts/PopupWithConfirm';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';
import Api from '../scripts/Api';

// Список переменных в формах
const options = {
  formSelector: '.popup__form',
  submitSelector: '.popup__save',
  inputSelector: '.popup__form-item',
  inputSectionSelector: '.popup__form-input',
  inputErrorSelector: '.popup__form-error',
  inputErrorClass: 'popup__form-error_active',
  disabledButtonClass: 'popup__save_inactive',
}

// Объявление переменных
const profilePopup = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const imagePopup = document.querySelector('#image');
const avatarPopup = document.querySelector('#avatar');

const editForm = document.querySelector('#edit-form');
const addForm = document.querySelector('#add-form');
const avatarForm = document.querySelector('#avatar-form');

const editButton = document.querySelector('.profile__button_type-edit');
const addButton = document.querySelector('.profile__button_type-add');
const avatarButton = document.querySelector('.profile__avatar-button');
const likeButton = document.querySelector('.elements__button_like');

const nameInput = document.querySelector('.popup__form-item_input_name');
const aboutInput = document.querySelector('.popup__form-item_input_job');
const avatarInput = document.querySelector('.popup__form-item_input_avatar');

const container = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template');

// Создание формы добавления карточки
const formValidatorCard = new FormValidator(options, addForm);
formValidatorCard.enableValidation();

// Создание формы редактирования профиля
const formValidatorProfile = new FormValidator(options, editForm);
formValidatorProfile.enableValidation();

//Создание формы редактирования аватара
const formValidatorAvatar = new FormValidator(options, avatarForm);
formValidatorAvatar.enableValidation();

// Создание экземпляра попапа с картинкой
const popupOpenImage = new PopupWithImage(imagePopup);
popupOpenImage.setEventListeners();

const handleCardClick = (name, link) => {
  popupOpenImage.open(name, link);
}

const handleLikeCard = (card) => {
  api.likeCard(card.getCardId())
    .then((res) => {
      card.handleLike();
      card.counterLikes(res);
    })
    .catch((error) => {
      console.log(error);
    });
}

const handleDislikeCard = (card) => {
  api.dislikeCard(card.getCardId())
    .then((res) => {
      card.handleLike();
      card.counterLikes(res);
    })
    .catch((error) => {
      console.log(error);
    });
}





// Добавление карточки на страницу
const renderCard = (item) => {
  const card = new Card(item.name, item.link, item.likes, item._id, item.owner._id,
    cardTemplate, handleCardClick, handleLikeCard, handleDislikeCard); //handleDeleteClick
  cardList.addItem(card.createCard());
  likeButton.addEventListener('click', handleLikeCard, handleDislikeCard);
}

// Создание экземпляра карточек
const cardList = new Section({
  renderer: renderCard,
}, container);

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__job',
  avatarSelector: '.profile__image',
});

// Создание попапа профиля
const popupEditProfile = new PopupWithForm({
  popupElement: profilePopup,
  submitForm: editProfileInfo,
});

popupEditProfile.setEventListeners();

// Слушатель попапа формы профиля
editButton.addEventListener('click', () => {
  const {name, about} = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = about;
  popupEditProfile.open()
});

// Создание попапа редактирования аватара профиля
const popupEditAvatar = new PopupWithForm({
  popupElement: avatarPopup,
  submitForm: editProfileAvatar,
});

popupEditAvatar.setEventListeners();

avatarButton.addEventListener('click', () => {
  const { avatar } = userInfo.getUserInfo();
  avatarInput.value = avatar;
  popupEditAvatar.open();
  formValidatorAvatar.disableButton();
})

// Создание попапа добавления карточки
const popupAddCard = new PopupWithForm({
  popupElement: popupAdd,
  submitForm: (item) => {
    createNewCard(item);
    popupAddCard.close();
    formValidatorCard.disableButton();
  },
});

popupAddCard.setEventListeners();

// Слушатель добавления карточки
addButton.addEventListener('click', () => {
  popupAddCard.open();
});





const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '99359d1f-f5b1-4868-8efb-f0dafa2bda0d',
    'content-type': 'application/json',
  }
});

api.getUserInfo()
  .then((res) => {
    userInfo.setUserInfo(res);
  })
  .catch((error) => {
  console.log(error);
  });

api.getInitialCards()
  .then((res) => {
    cardList.renderItems(res);
  })
  .catch((error) => {
  console.log(error);
  });
  
function editProfileInfo(item) {
  api.editUserInfo(item)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((error) => {
      console.log(error);
    });
}

function editProfileAvatar(item) {
  api.editUserPhoto(item)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createNewCard(item) {
  api.addNewCard(item)
    .then((res) => {
      renderCard(res);
    })
    .catch((error) => {
      console.log(error);
    });
}






// function deleteCardElement() {
//   api.deleteCard(cardId)
// }








































// // Массив карточек
// const initialCards = [
//   {
//     name: 'Бурятия',
//     link: 'https://images.unsplash.com/photo-1665584567788-c9d06af61bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
//   },
//   {
//     name: 'Амурская область',
//     link: 'https://images.unsplash.com/photo-1631427513371-25728fe1feda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Сахалин',
//     link: 'https://images.unsplash.com/photo-1661680390126-ed81efd300b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
//   },
//   {
//     name: 'Хабаровск',
//     link: 'https://images.unsplash.com/photo-1581589375338-1adf221c67c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
//   },
//   {
//     name: 'Владивосток',
//     link: 'https://images.unsplash.com/photo-1634545042913-fd935f23b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
//   },
// ]


  // items: data,

    // userId = res._id;




    // userInfo.setUserInfo({
    //   name: item.value,
    //   about: item.value,
    // });
    // api.editProfileInfo();
    // popupEditProfile.close();