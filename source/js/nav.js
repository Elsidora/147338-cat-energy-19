'use strict'

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

var onNavToggleClick = function onNavToggleClick(evt) {
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
};

navToggle.addEventListener('click', onNavToggleClick);
