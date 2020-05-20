'use strict';

(function initComparisons() {
  if (window.innerWidth >= 768) {
    var sliderHidden = document.querySelectorAll(".slider-hidden");

    var compareImages = function compareImages(img) {
      var sliderRangeFilter = document.querySelector(".slider__range-filter");
      var sliderRangeBtn = sliderRangeFilter.querySelector(".slider__range-btn");
      var widthImg = img.offsetWidth;
      var heightImg = img.offsetHeight;
      var widthSliderRangeFilter = sliderRangeFilter.offsetWidth;

      var clicked = 0;
      img.style.width = widthImg / 2 + "px";
      img.style.height = heightImg + "px";

      if (window.innerWidth >= 1300) {
        img.style.width = widthImg / 2 + 20 + "px";
        widthSliderRangeFilter = sliderRangeFilter.offsetWidth;
      }

      var slideReady = function slideReady(evt) {
        evt.preventDefault();
        /* Теперь ползунок нажат и готов к перемещению: */

        clicked = 1;
        /* Выполнение функции при перемещении ползунка: */

        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      };

      var slideFinish = function slideFinish() {
        /* Ползунок больше не нажимается: */
        clicked = 0;
      };

      var getCursorPosition = function getCursorPosition(evt) {
        var x = 0;
        var sliderRangeFilterCoord = sliderRangeFilter.getBoundingClientRect();
        evt = evt || window.evt;
        x = evt.pageX - sliderRangeFilterCoord.left;
        x = x - window.pageXOffset;
        return x;
      };

      var slide = function slide(x) {
        img.style.width = widthImg / widthSliderRangeFilter * x + "px";
        img.style.height = heightImg + "px";
        sliderRangeBtn.style.left = x - sliderRangeBtn.offsetWidth / 2 + "px";
      };

      var slideMove = function slideMove(evt) {
        var position = getCursorPosition(evt);
        if (clicked === 0) return false;
        if (position < 0) position = 0;
        if (position > widthSliderRangeFilter) position = widthSliderRangeFilter;
        slide(position);
      };

      sliderRangeBtn.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      sliderRangeBtn.addEventListener("touchstart", slideReady);
      window.addEventListener("touchstop", slideFinish);
    };

    for (var i = 0; i < sliderHidden.length; i += 1) {
      compareImages(sliderHidden[i]);
    }
  } else {
    var sliderButtons = document.querySelector(".slider__buttons");
    var sliderItems = document.querySelectorAll(".slider__item");
    var sliderRangeBtn = sliderButtons.querySelector(".slider__range-btn");

    var onSliderButtonsClick = function onSliderButtonsClick(evt) {
      evt.preventDefault();
      var target = evt.target;

      if (target.value === "next") {
        sliderRangeBtn.classList.add("slider__range-btn--click");
      } else {
        sliderRangeBtn.classList.remove("slider__range-btn--click");
      }

      sliderItems.forEach(function (sliderItem) {
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
