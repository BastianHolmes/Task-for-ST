import './style.scss'

const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.settings__link--auth');
const closePopup = document.querySelector('.popup__close');
const bg = document.querySelector('.popup-bg');

openPopup.addEventListener('click', (event) =>{
  event.preventDefault();
  popup.classList.add('popup__active');
  bg.classList.add('popup-bg__active');
});

closePopup.addEventListener('click', event =>{
  event.preventDefault();
  popup.classList.remove('popup__active');
  bg.classList.remove('popup-bg__active');
});

document.addEventListener('click', (event) => {
  if(event.target === bg  ) {
      popup.classList.remove('popup__active');
      bg.classList.remove('popup-bg__active');
  }
});
