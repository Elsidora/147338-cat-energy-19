"use strict";
var form = document.querySelector(".form");
var requiredInputs = form.querySelectorAll("input[required]");

var onChangeForm = function onChangeForm(evt) {
  var target = evt.target;
  var icon = target.nextElementSibling;

  if (target.required) {
    if (target.validity.patternMismatch) {
      target.style.border = "1px solid red";
      icon.classList.add("form__icon--error");
    } else {
      target.style.border = "1px solid rgba(230, 230, 230, 0.5)";

      if (icon.classList.contains("form__icon--error")) {
        icon.classList.remove("form__icon--error");
      }
    }
  }
};

form.addEventListener("change", onChangeForm);
