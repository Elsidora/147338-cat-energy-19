"use strict";
const form = document.querySelector(".form");
const requiredInputs = form.querySelectorAll("input[required]");
const formContacts = form.querySelector(".form__list--contacts");

console.log(requiredInputs);
const onChangeFormContacts = (evt) => {
  const { target } = evt;
  if (target.validity.patternMismatch) {
    target.style.border = "1px solid red";
  } else {
    target.style.border = "1px solid rgba(230, 230, 230, 0.5)";
  }
}

formContacts.addEventListener("change", onChangeFormContacts);

