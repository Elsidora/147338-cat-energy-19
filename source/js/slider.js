'use strict';


(function initComparisons() {
  if (window.innerWidth >= 768) {
    const sliderHidden = document.querySelectorAll(".slider-hidden");

    const compareImages = (img) => {
      const sliderRangeFilter = document.querySelector(".slider__range-filter");
      const sliderRangeBtn = sliderRangeFilter.querySelector(".slider__range-btn");
      const widthImg = img.offsetWidth;
      const heightImg = img.offsetHeight;
      const widthSliderRangeFilter = sliderRangeFilter.offsetWidth;
      let clicked = 0;

      img.style.width = widthImg / 2 + "px";
      img.style.height = heightImg + "px";

      const slideReady = (evt) => {
      evt.preventDefault();
      /* Теперь ползунок нажат и готов к перемещению: */
      clicked = 1;
      /* Выполнение функции при перемещении ползунка: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
      };

      const slideFinish = () => {
        /* Ползунок больше не нажимается: */
        clicked = 0;
      };

      const getCursorPosition = (evt) => {
        let x = 0;
        const sliderRangeFilterCoord = sliderRangeFilter.getBoundingClientRect();
        evt = evt || window.evt;
        x = evt.pageX - sliderRangeFilterCoord.left;
        x = x - window.pageXOffset;
        return x;
      };

      const slide = (x) => {
        img.style.width = (widthImg / widthSliderRangeFilter) * x + "px";
        img.style.height = heightImg + "px";
        sliderRangeBtn.style.left = x - (sliderRangeBtn.offsetWidth / 2) + "px";
      };

      const slideMove = (evt) => {
        const position = getCursorPosition(evt);
        if (clicked === 0) return false;
        if (position < 0) position = 0;
        if (position > widthSliderRangeFilter) position = widthSliderRangeFilter;
        slide(position);
      };

      sliderRangeBtn.addEventListener("mousedown", slideReady);

      window.addEventListener("mouseup", slideFinish);

      sliderRangeBtn.addEventListener("touchstart", slideReady);

      window.addEventListener("touchstop", slideFinish);
    }

    for (let i = 0; i < sliderHidden.length; i += 1) {
      compareImages(sliderHidden[i]);
    }
  } else {
    const sliderButtons = document.querySelector(".slider__buttons");
    const sliderItems = document.querySelectorAll(".slider__item");
    const sliderRangeBtn = sliderButtons.querySelector(".slider__range-btn")

    const onSliderButtonsClick = (evt) => {
      evt.preventDefault();
      const {target} = evt;
      if (target.value === "next") {
        sliderRangeBtn.classList.add("slider__range-btn--click");
      } else {
        sliderRangeBtn.classList.remove("slider__range-btn--click");
      }
      sliderItems.forEach( (sliderItem) => {
        if (target.classList.contains("slider__description")) {
          sliderItem.classList.add("slider-none");
          target.blur();
          if (sliderItem.id === target.value) {
            sliderItem.classList.remove("slider-none");
          }
        };
      });
    };
    sliderButtons.addEventListener("click", onSliderButtonsClick);
  }
})();
