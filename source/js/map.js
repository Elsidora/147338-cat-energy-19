"use strict";
var init = function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    zoom: 17
  });
};

ymaps.ready(init);
