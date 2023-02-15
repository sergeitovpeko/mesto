// Объявление переменных
const editButton = document.querySelector('.profile__button_type-edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form-item');
let nameProfile = document.querySelector ('.profile__name')
let jobProfile = document.querySelector ('.profile__job')

let nameInput = popup.querySelector('.popup__form-item_name_input');
let jobInput = popup.querySelector('.popup__form-item_job_input');


// Открытие и закрытие попапа по нажатию на крестик
const handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent.trim();
    jobInput.value = jobProfile.textContent.trim();
}

const closePopup = () => {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', closePopup);


// Редактирование информации в профиле
function handleFormSubmit (evt) {
  evt.preventDefault();
 
  nameProfile.textContent = nameInput.value.trim();
  jobProfile.textContent = jobInput.value.trim();

  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 