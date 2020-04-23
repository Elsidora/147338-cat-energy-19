"use strict";
const form = document.querySelector(".form");
const requiredInputs = form.querySelectorAll("input[required]");

const onChangeForm = (evt) => {
  const { target } = evt;
  const icon = target.nextElementSibling;
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
}

form.addEventListener("change", onChangeForm);
