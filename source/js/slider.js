'use strict';
const sliderButtons = document.querySelector('.slider__buttons');
const sliderItems = document.querySelectorAll('.slider__item');

const onSliderButtonsClick = (evt) => {
  evt.preventDefault();
  const {target} = evt;
  sliderItems.forEach( (sliderItem) => {
    if (target.classList.contains("slider__description")) {
      sliderItem.classList.add('slider-hidden');
      target.blur();
      if (sliderItem.id === target.value) {
        sliderItem.classList.remove('slider-hidden');

      }
    };
  });
};

sliderButtons.addEventListener('click', onSliderButtonsClick);
