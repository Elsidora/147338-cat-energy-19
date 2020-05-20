"use strict";
var init = function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Cat Energy',
    balloonContent: 'Мы здесь'
  },
  {

    iconLayout: 'default#image',
    iconImageHref: 'img/map-pin.png',
    iconImageSize: [55, 53],
    iconImageOffset: [-27.5, -53]

  });
  myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(init);
