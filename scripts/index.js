// Объявление переменных
const editButton = document.querySelector('.profile__button_type-edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');
let nameProfile = document.querySelector ('.profile__name')
let jobProfile = document.querySelector ('.profile__job')

let nameInput = popup.querySelector('.popup__form-item_input_name');
let jobInput = popup.querySelector('.popup__form-item_input_job');

const addButton = document.querySelector('.profile__button_type-add');
const popupAdd = document.querySelector('#add');
const closeAddButton = popupAdd.querySelector('.popup__close');


const ul = document.querySelector('.elements__list');
const form = document.querySelector('#add-form');
const template = document.querySelector('#template');


const image = document.querySelector('.elements__image');
const imagePopup = document.querySelector('#image');
const closeImagePopup = imagePopup.querySelector('.popup__close');

const bigImage = document.querySelector('.popup__image');
const nameImage = document.querySelector('.popup__image-name');
const elementsImage = document.querySelector('.elements__image');
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










// Открытие и закрытие формы на изменение данных
const handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent.trim();
    jobInput.value = jobProfile.textContent.trim();
}

const closePopup = () => {
  popup.classList.remove('popup_opened');
}


// Редактирование информации в профиле
function handleFormSubmit (evt) {
  evt.preventDefault();
 
  nameProfile.textContent = nameInput.value.trim();
  jobProfile.textContent = jobInput.value.trim();

  closePopup();

}

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 










// Открытие и закрытие формы для добавления новой карточки
const handleAddButtonClick = () => {
  popupAdd.classList.add('popup_opened');
}

const closePopupAdd = () => {
  popupAdd.classList.remove('popup_opened');
}

addButton.addEventListener('click', handleAddButtonClick);
closeAddButton.addEventListener('click', closePopupAdd);


// Функция 'Like' и 'Удалить'
const handleDelete = (evt) => {
  evt.target.closest('.elements__list-item').remove();
}

const handleLike = (evt) => {
  evt.target.classList.toggle('elements__button_like_active');
};









// Открытие и закрытие попапа с картинкой
const handleImagePopupClick = (evt) => {
  imagePopup.classList.add('popup_opened-image');
  bigImage.src = evt.target.src;
  nameImage.textContent = elementsTitle.textContent;
}


const closeImgPopup = () => {
  imagePopup.classList.remove('popup_opened-image');
}




// Функция добавления новой карточки
const getElement = (item) => {
  const newElement = template.content.cloneNode(true);
  const newElementTitle = newElement.querySelector('.elements__title');
        newElementTitle.textContent = (item.name);
  const newElementPicture = newElement.querySelector('.elements__image');
        newElementPicture.src = (item.link);
  

  const deleteButton = newElement.querySelector('.elements__button_delete');
  const likeButton = newElement.querySelector('.elements__button_like');

  deleteButton.addEventListener('click', handleDelete);
  likeButton.addEventListener('click', handleLike);
  newElementPicture.addEventListener('click', handleImagePopupClick);
  newElementTitle.addEventListener('click', handleImagePopupClick);
  closeImagePopup.addEventListener('click', closeImgPopup);

  return newElement;
}





const renderElement = (wrap, item) => {
  wrap.prepend(getElement(item));
}

initialCards.forEach((item) => {
  renderElement(ul, item);
});









// Слушатель формы добавления новой карточки
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const name = document.querySelector('#name');
  const image = document.querySelector('#link');
  const item = { name: name.value, link: image.value };

  renderElement(ul, item);
  closePopupAdd();
  evt.target.reset();
});











// image.addEventListener('click', handleImagePopupClick);
// closeImagePopup.addEventListener('click', closeImgPopup);






































































// const ul = document.querySelector('.elements__list');
// const t = document.querySelector('#template');

// const element = template.content.cloneNode(true);
// element.querySelector('.elements__image').src = 'https://images.unsplash.com/photo-1634545042913-fd935f23b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';
// element.querySelector('.elements__title').textContent = 'Владивосток';
// ul.append(element);



// const pictire = t.content.querySelector('.elements-image');
// const title = t.content.querySelector('.elements-title');

// pictire.content = 'https://unsplash.com/photos/fiMa6BU28gU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';
// title.textContent = 'Владивосток';

// let li = t.content.cloneNode(true);
// ul.append(li);













// const renderElement = (wrap, item) => {
//   wrap.insertAdjacentHTML('beforebegin', `
//         <li class="elements__list-item">
//           <img class="elements__image" src="${item.link}" alt="Фотография">
//           <div class="elements__info">
//             <h2 class="elements__title">${item.name}</h2>
//             <button class="elements__button" type="button"></button>
//           </div>
//         </li>`)
// }
















// Создание template элементов
// const elementsListWrapper = document.querySelector('.elements__list');
// const template = document.getElementById('element');

// const getElement = (name, link) => {
//   const newElement = template.content.cloneNode(true);
//   const newElementTitle = newElement.querySelector('.elements__title');
//         newElementTitle.textContent = name;
//   const newElementPicture = newElement.querySelector('.element-picture');
//         newElementPicture.textContent = link
//   return newElement;
// }

// const renderElement = (wrap, name, link) => {
//   wrap.append(getElement(name));
//   wrap.append(getElement(link));
// }

// initialCards.forEach((name, link) => {
//   renderElement(ElementsListWrapper, name);
//   renderElement(ElementsListWrapper, link);
// });