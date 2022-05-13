'use strict';
let elCheck = document.querySelector('.check');
let elInput = document.querySelector('.guess');
let elSecretNumber = document.querySelector('.number');
let secretNumber = Math.floor(Math.random() * 20) + 1;
elSecretNumber.textContent = '?';
elCheck.addEventListener('click', function (event) {
  event.preventDefault();
  elSecretNumber.textContent = secretNumber;
  let inputValue = Number(elInput.value);
  console.log(inputValue);
  if (inputValue == secretNumber) {
    console.log('yutiz');
  }
  if (inputValue === 0) {
    alert('Raqam kiriting');
  }
});
