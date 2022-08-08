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

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Event listener for remove validation if empty
formInputs.forEach((input, index) => {
  input.addEventListener('focusout', (e) => {
    if (input.value === '') {
      removeValidityClass(input);
      errorObject = formErrors[index];
      setErrorMsg(errorObject, '');
    }
  });
});

userName.addEventListener('input', (e) => {
  if (userName.value.trim() === '') {
    isInvalid(userName);
    setErrorMsg(userNameError, 'Must not be empty');
  } else {
    isValid(userName);
    setErrorMsg(userNameError, '');
  }
});

email.addEventListener('input', (e) => {
  if (email.validity.typeMismatch || email.value === '') {
    isInvalid(email);
    setErrorMsg(emailError, 'Not a valid email address');
  } else {
    isValid(email);
    setErrorMsg(emailError, '');
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
