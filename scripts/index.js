// Объявление переменных
const editButton = document.querySelector('.profile__button_type-edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

const formElement = document.querySelector('.popup__form');
const nameProfile = document.querySelector ('.profile__name')
const jobProfile = document.querySelector ('.profile__job')

const nameInput = popup.querySelector('.popup__form-item_input_name');
const jobInput = popup.querySelector('.popup__form-item_input_job');

const addButton = document.querySelector('.profile__button_type-add');
const popupAdd = document.querySelector('#add');
console.log(popupAdd);
const closeAddButton = popupAdd.querySelector('.popup__close');


const elementsList = document.querySelector('.elements__list');
const form = document.querySelector('#add-form');
const template = document.querySelector('#template');


const imagePopup = document.querySelector('#image');
const closeImagePopup = imagePopup.querySelector('.popup__close');

const bigImage = document.querySelector('.popup__image');
const nameImage = document.querySelector('.popup__image-name');
const elementsTitle = document.querySelector('.elements__title');



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
];

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};


const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

// Открытие и закрытие формы на изменение данных
const handleEditButtonClick = () => {
    openPopup(popup)
    nameInput.value = nameProfile.textContent.trim();
    jobInput.value = jobProfile.textContent.trim();
}

// const closePopup = () => {
//   popup.classList.remove('popup_opened');
// }



// Редактирование информации в профиле
function handleFormSubmit (evt) {
  evt.preventDefault();
 
  nameProfile.textContent = nameInput.value.trim();
  jobProfile.textContent = jobInput.value.trim();

  closePopup(popup);

}

editButton.addEventListener('click', handleEditButtonClick);
// closeButton.addEventListener('click', closePopup);
closeButton.addEventListener('click', () => {
  closePopup(popup);
});
  
formElement.addEventListener('submit', handleFormSubmit); 



// Открытие и закрытие формы для добавления новой карточки
// const handleAddButtonClick = () => {
//   popupAdd.classList.add('popup_opened');
// }

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

closeAddButton.addEventListener('click', () => {
  closePopup(popupAdd);
});

// const closePopupAdd = () => {
//   popupAdd.classList.remove('popup_opened');
// }



// addButton.addEventListener('click', handleAddButtonClick);
// closeAddButton.addEventListener('click', closePopupAdd);



// Функция 'Like' и 'Удалить'
const handleDelete = (evt) => {
  evt.target.closest('.elements__list-item').remove();
}

const handleLike = (evt) => {
  evt.target.classList.toggle('elements__button_like_active');
};



// Функция добавления новой карточки
const getElement = (item) => {
  const newElement = template.content.cloneNode(true);
  const newElementTitle = newElement.querySelector('.elements__title');
        newElementTitle.textContent = (item.name);
  const newElementPicture = newElement.querySelector('.elements__image');
  newElementPicture.src = (item.link);
  newElementPicture.alt = (item.name);
  

  const deleteButton = newElement.querySelector('.elements__button_delete');
  const likeButton = newElement.querySelector('.elements__button_like');

  deleteButton.addEventListener('click', handleDelete);
  likeButton.addEventListener('click', handleLike);



  // Открытие и закрытие попапа с картинкой
  const handleImagePopupClick = (evt) => {
    imagePopup.classList.add('popup_opened');
    bigImage.src = evt.target.src;
    bigImage.alt = evt.target.alt;
    nameImage.textContent = evt.target.alt;
  }
  
  // const closeImgPopup = () => {
  //   imagePopup.classList.remove('popup_opened-image');
  // }

  // newElementPicture.addEventListener('click', handleImagePopupClick);
  // closeImagePopup.addEventListener('click', closeImgPopup);

  newElementPicture.addEventListener('click', handleImagePopupClick);
  closeImagePopup.addEventListener('click', () => {
  closePopup(imagePopup)
  });

  return newElement;
}




const renderElement = (wrap, item) => {
  wrap.prepend(getElement(item));
}

initialCards.forEach(item => {
  renderElement(elementsList, item);
});



// Слушатель формы добавления новой карточки
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const name = document.querySelector('#name');
  const image = document.querySelector('#link');
  const item = { name: name.value, link: image.value };

  renderElement(elementsList, item);
  closePopup(imagePopup);
  evt.target.reset();
});





// function openPopup(popup) {
//   popup.classList.add('popup_opened');
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
// }