// form main
const form = document.querySelector('#myForm');
const formInputs = document.querySelectorAll('input');
const formErrors = document.querySelectorAll('.error');
const submitBtn = document.querySelector('.submit-btn');

// form inputs
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// form errors
const userNameError = document.querySelector('.user-msg');
const emailError = document.querySelector('.email-msg');
const passwordError = document.querySelector('.password-msg');
const cPasswordError = document.querySelector('.cpass-msg');

// form icon erros
const errorIcons = document.querySelectorAll('.fa-times-circle-o');
const checkIcons = document.querySelectorAll('.fa-check-circle-o');

console.log(errorIcons, checkIcons);

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Remove validation if empty
formInputs.forEach((input, index) => {
  input.addEventListener('focusout', (e) => {
    if (input.value === '') {
      removeValidityClass(input);
      errorObject = formErrors[index];
      setErrorMsg(errorObject, '');
      hideIcon(errorIcons[index]);
      hideIcon(checkIcons[index]);
    }
  });
});

userName.addEventListener('input', (e) => {
  if (userName.value.trim() === '') {
    isInvalid(userName);
    setErrorMsg(userNameError, 'Must not be empty');
    showIcon('error', 0);
  } else {
    isValid(userName);
    setErrorMsg(userNameError, '');
    showIcon('valid', 0);
  }
});

email.addEventListener('input', (e) => {
  if (email.validity.typeMismatch || email.value === '') {
    isInvalid(email);
    setErrorMsg(emailError, 'Must be a valid email address');
    showIcon('error', 1);
  } else {
    isValid(email);
    setErrorMsg(emailError, '');
    showIcon('valid', 1);
  }
});

// password validaton

// functionalities
function removeValidityClass(input) {
  input.classList.remove('valid');
  input.classList.remove('invalid');
}

function isInvalid(input) {
  input.classList.remove('valid');
  input.classList.add('invalid');
}

function isValid(input) {
  input.classList.remove('invalid');
  input.classList.add('valid');
}

function setErrorMsg(input, message) {
  input.textContent = message;
}

// icon functions
function showIcon(type, index) {
  if (type === 'error') {
    errorIcons[index].classList.add('show');
    checkIcons[index].classList.remove('show');
  } else if (type === 'valid') {
    errorIcons[index].classList.remove('show');
    checkIcons[index].classList.add('show');
  }
}

function hideIcon(icon) {
  icon.classList.remove('show');
}
