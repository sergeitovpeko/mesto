// Открытие и закрытие попапа по нажатию на крестик
const editButton = document.querySelector('.profile__button_type-edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

const handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
}

const handleCloseButtonClick = () => {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);


// Редактирование информации в профиле
let formElement = document.querySelector('.popup__form');

let nameProfile = document.querySelector ('.profile__name')
let jobProfile = document.querySelector ('.profile__job')

let nameInput = popup.querySelector('input[name="name"]');
let jobInput = popup.querySelector('input[name="job"]');

function handleFormSubmit (evt) {
  evt.preventDefault();
 
  nameProfile.textContent = nameInput.value.trim();
  jobProfile.textContent = jobInput.value.trim();

  handleCloseButtonClick();
}

formElement.addEventListener('submit', handleFormSubmit); 