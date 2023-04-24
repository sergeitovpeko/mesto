import Card from './Сard.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

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

const closeButton = document.querySelector('.popup__close');
const closeAddButton = popupAdd.querySelector('.popup__close');
const closeImagePopup = imagePopup.querySelector('.popup__close');

const nameInput = document.querySelector('.popup__form-item_input_name');
const jobInput = document.querySelector('.popup__form-item_input_job');

const container = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template');

const bigImage = document.querySelector('.popup__image');
const nameImage = document.querySelector('.popup__image-name');

const name = document.querySelector('#name');
const image = document.querySelector('#link');



// Создание экземпляра попапа с картинкой
const popupOpenImage = new PopupWithImage(imagePopup);
popupOpenImage.setEventListeners();

const handleCardClick = (name, link) => {
  popupOpenImage.open(name, link);
}

// Создание карточек и добавление карточек на страницу
const cardList = new Section({
  renderer: (item) => {
    const card = new Card(item.name, item.link, cardTemplate, handleCardClick);
    cardList.addItem(card.createCard());
  }
}, container);

  cardList.renderItems(initialCards);

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__job',
});

const popupEditProfile = new PopupWithForm({
  popupSelector: profilePopup,
  submitForm: ({name, info}) => {
    userInfo.setUserInfo({
      name: nameInput.value,
      info: jobInput.value,
    });
    popupEditProfile.close();
  }
});

popupEditProfile.setEventListeners();

editButton.addEventListener('click', () => {
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = info;
  popupEditProfile.open()
});


const popupAddCard = new PopupWithForm({
  popupSelector: popupAdd,
  submitForm: (item) => {
    cardList.renderItems(item);
    popupAddCard.close();
  }
});


popupAddCard.setEventListeners();

addButton.addEventListener('click', () => {
  popupAddCard.open();
});












// Открытие и закрытие попапа с картинкой
// const handleCardClick = (data) => {
//   const popupOpenImage = new PopupWithImage(imagePopup);

//   bigImage.src = data.src;
//   bigImage.alt = data.alt;
//   nameImage.textContent = data.alt;

//   popupOpenImage.open(name, link);

//   open(handleImagePopupClick);
// }

// image.addEventListener('click', handleCardClick);


// // Создание и возврат карточки
// function createCard(item) {
//   const card = new Card(item.name, item.link, cardTemplate, handleImagePopupClick);
//   const cardElement = card.createCard();
//   return cardElement;
// }

// // Добавление карточки на страницу
// const renderElement = (data) => {
//   const cardElement = createCard(data)
//   container.prepend(cardElement);
// };

// // Перебор и добавление карточек на страницу
// initialCards.forEach(renderElement);






// Создание формы добавления карточки
const formValidatorCard = new FormValidator(options, addForm);
formValidatorCard.enableValidation();

// Создание формы редактирования профиля
const formValidatorProfile = new FormValidator(options, editForm);
formValidatorProfile.enableValidation();



// // Открытие попапа
// const openPopup = (popup) => {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupsEscape);
// };

// // Закрытие попапа
// const closePopup = (popup) => {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupsEscape);
// };


// addButton.addEventListener('click', () => {
//   openPopup(popupAdd);
// });









// Открытие и закрытие формы на изменение данных
// const handleEditButtonClick = () => {
//   openPopup(profilePopup)
//   nameInput.value = nameProfile.textContent.trim();
//   jobInput.value = jobProfile.textContent.trim();
// }









// // Закрытие по нажатию на оверлей
// document.querySelectorAll('.popup').forEach(popup => {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target === evt.currentTarget) {
//       closePopup(popup);
//     }
//   });
// });

// // Закрытие по нажатию на Escape
// const closePopupsEscape = (evt) => {
//   if (evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened')
//     closePopup(popup);
//   }
// };


// closeButton.addEventListener('click', () => {
//   closePopup(profilePopup);
// });


// closeAddButton.addEventListener('click', () => {
//   closePopup(popupAdd);
// });



// Редактирование информации в профиле
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();

//   nameProfile.textContent = nameInput.value.trim();
//   jobProfile.textContent = jobInput.value.trim();

//   closePopup(profilePopup);
// }

// editForm.addEventListener('submit', handleProfileFormSubmit);


// // Слушатель формы добавления новой карточки
// addForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const item = { name: name.value, link: image.value };
//   renderElement(item);
//   closePopup(popupAdd);
//   evt.target.reset();

//   formValidatorCard.disableButton();
// });


// closeImagePopup.addEventListener('click', () => {
//   closePopup(imagePopup);
// });








// Открытие и закрытие попапа с картинкой
// const handleImagePopupClick = (data) => {
//   openPopup(imagePopup);
//   bigImage.src = data.src;
//   bigImage.alt = data.alt;
//   nameImage.textContent = data.alt;
// }