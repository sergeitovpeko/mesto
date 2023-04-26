import './index.css';
import Card from '../scripts/Сard.js';
import Section from '../scripts/Section.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';

// Массив карточек
const initialCards = [
  {
    name: 'Бурятия',
    link: 'https://images.unsplash.com/photo-1665584567788-c9d06af61bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
  },
  {
    name: 'Амурская область',
    link: 'https://images.unsplash.com/photo-1631427513371-25728fe1feda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Сахалин',
    link: 'https://images.unsplash.com/photo-1661680390126-ed81efd300b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  },
  {
    name: 'Хабаровск',
    link: 'https://images.unsplash.com/photo-1581589375338-1adf221c67c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Владивосток',
    link: 'https://images.unsplash.com/photo-1634545042913-fd935f23b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
]

// Список переменных в формах
const options = {
  formSelector: '.popup__form',
  submitSelector: '.popup__save',
  inputSelector: '.popup__form-item',
  inputSectionSelector: '.popup__form-input',
  inputErrorSelector: '.popup__form-error',
  inputErrorClass: 'popup__form-error_active',
  disabledButtonClass: 'popup__save_inactive',
};

// Объявление переменных
const profilePopup = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const imagePopup = document.querySelector('#image');

const editForm = document.querySelector('#edit-form');
const addForm = document.querySelector('#add-form');

const editButton = document.querySelector('.profile__button_type-edit');
const addButton = document.querySelector('.profile__button_type-add');

const nameInput = document.querySelector('.popup__form-item_input_name');
const jobInput = document.querySelector('.popup__form-item_input_job');

const container = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template');




// Создание экземпляра попапа с картинкой
const popupOpenImage = new PopupWithImage(imagePopup);
popupOpenImage.setEventListeners();

const handleCardClick = (name, link) => {
  popupOpenImage.open(name, link);
}

// Добавление карточки на страницу
const renderCard = (item) => {
  const card = new Card(item.name, item.link, cardTemplate, handleCardClick);
  cardList.addItem(card.createCard());
}

// Создание экземпляра карточек
const cardList = new Section({
  items: initialCards,
  renderer: renderCard
}, container);

cardList.renderItems();




const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__job',
});

// Создание попапа профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: profilePopup,
  submitForm: ({ name, info }) => {
    userInfo.setUserInfo({
      name: nameInput.value,
      info: jobInput.value,
    });
    popupEditProfile.close();
  }
});

popupEditProfile.setEventListeners();

// Слушатель попапа формы профиля
editButton.addEventListener('click', () => {
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = info;
  popupEditProfile.open()
});




// Создание попапа добавления карточки
const popupAddCard = new PopupWithForm({
  popupSelector: popupAdd,
  submitForm: (item) => {
    renderCard(item);
    popupAddCard.close();
  }
});

popupAddCard.setEventListeners();

// Слушатель добавления карточки
addButton.addEventListener('click', () => {
  popupAddCard.open();
});




// Создание формы добавления карточки
const formValidatorCard = new FormValidator(options, addForm);
formValidatorCard.enableValidation();

// Создание формы редактирования профиля
const formValidatorProfile = new FormValidator(options, editForm);
formValidatorProfile.enableValidation();