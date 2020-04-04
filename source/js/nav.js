'use strict'

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');

const onNavToggleClick = (evt) => {
  evt.preventDefault();
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.blur();
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.blur();
  }
}

navToggle.addEventListener('click', onNavToggleClick);
