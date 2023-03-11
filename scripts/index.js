// Объявление переменных
const editButton = document.querySelector('.profile__button_type-edit');
// const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('#edit');
const closeButton = document.querySelector('.popup__close');

// const formElement = document.querySelector('.popup__form');
const editForm = document.querySelector('#edit-form');
const nameProfile = document.querySelector ('.profile__name')
const jobProfile = document.querySelector ('.profile__job')

const nameInput = document.querySelector('.popup__form-item_input_name');
const jobInput = document.querySelector('.popup__form-item_input_job');

const addButton = document.querySelector('.profile__button_type-add');
const popupAdd = document.querySelector('#add');
const closeAddButton = popupAdd.querySelector('.popup__close');


const elementsList = document.querySelector('.elements__list');
const addForm = document.querySelector('#add-form');
const template = document.querySelector('#template');


const imagePopup = document.querySelector('#image');
const closeImagePopup = imagePopup.querySelector('.popup__close');

const bigImage = document.querySelector('.popup__image');
const nameImage = document.querySelector('.popup__image-name');
const elementsTitle = document.querySelector('.elements__title');


const name = document.querySelector('#name');
const image = document.querySelector('#link');



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
  document.addEventListener('keydown', closePopupsEscape);
};


const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupsEscape);
};



// Открытие и закрытие формы на изменение данных
const handleEditButtonClick = () => {
    openPopup(profilePopup)
    nameInput.value = nameProfile.textContent.trim();
    jobInput.value = jobProfile.textContent.trim();
}



// Редактирование информации в профиле
function handleFormSubmit (evt) {
  evt.preventDefault();
 
  nameProfile.textContent = nameInput.value.trim();
  jobProfile.textContent = jobInput.value.trim();

  closePopup(profilePopup);

}

editButton.addEventListener('click', handleEditButtonClick);


// Закрытие по нажатию на оверлей
const closePopupsOverlay = document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
});

// Закрытие по нажатию на Escape
const closePopupsEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup);
  }
};

// const escapePopups = document.querySelectorAll('.popup').forEach(popup => {
//   popup.addEventListener('keydown', (evt) => {
//     if (evt.keyCode === 27) {
//       closePopup(popup);
//     }
//   });
// });





// const popups = document.querySelectorAll('.popup');
// const arrayPopups = Array.from(popups);
// arrayPopups.forEach(popup => {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target === 'Escape') {
//       closePopup(popup)
//     }
//   });
// });
// console.log(arrayPopups);


// console.log(overlayPopups);



// popup.addEventListener('click', (evt) => {
//   if (evt.target === evt.currentTarget) {
//     closePopup(popup);
//   };
// });

// popupAdd.addEventListener('click', (evt) => {
//   if (evt.target === evt.currentTarget) {
//     closePopup(popupAdd);
//   };
// });

// imagePopup.addEventListener('click', (evt) => {
//   if (evt.target === evt.currentTarget) {
//     closePopup(imagePopup);
//   };
// });















closeButton.addEventListener('click', () => {
  closePopup(profilePopup);
});
  
editForm.addEventListener('submit', handleFormSubmit); 

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

closeAddButton.addEventListener('click', () => {
  closePopup(popupAdd);
});



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
    openPopup(imagePopup);
    bigImage.src = evt.target.src;
    bigImage.alt = evt.target.alt;
    nameImage.textContent = evt.target.alt;
  }
  

  newElementPicture.addEventListener('click', handleImagePopupClick);
  // closeImagePopup.addEventListener('click', () => {
  // closePopup(imagePopup)
  // });

  return newElement;
}

  closeImagePopup.addEventListener('click', () => {
  closePopup(imagePopup);
  });


const renderElement = (wrap, item) => {
  wrap.prepend(getElement(item));
}

initialCards.forEach(item => {
  renderElement(elementsList, item);
});


// Слушатель формы добавления новой карточки
addForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const item = { name: name.value, link: image.value };
  renderElement(elementsList, item);
  closePopup(popupAdd);
  evt.target.reset();

  const createButton = evt.submitter;
  createButton.classList.add('popup__save_inactive');
  createButton.disabled = (true);
});

// form.addEventListener('submit', (evt) => {

// });







const options = {
  formSelector: '.popup__form',
  submitSelector: '.popup__save',
  inputSelector: '.popup__form-item',
  inputSectionSelector: '.popup__form-input',
  inputErrorSelector: '.popup__form-error',
  inputErrorClass: 'popup__form-error_active',
  disabledButtonClass: 'popup__save_inactive',
};

enableValidation(options);

// const formSignIn = document.forms.signIn

// formSignIn.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   console.log(formSignIn);
//   formSignIn.reset();
// });















































// let formIsValid = true;

// for (let i = 0; i < inputs.length; i++) {
//   const InputElement = inputs[i];
//   const isValid = InputElement.validity.valid;
//   if (!isValid) {
//     formIsValid = false;
//     break;
//   }
// }


// submitButton.disabled = '';
// submitButton.classList.remove('popup__save_inactive');