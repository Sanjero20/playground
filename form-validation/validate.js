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
const passwordError = document.querySelector('.pass-msg');
const cPasswordError = document.querySelector('.cpass-msg');

// form icon erros
const errorIcons = document.querySelectorAll('.fa-times-circle-o');
const checkIcons = document.querySelectorAll('.fa-check-circle-o');

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
password.addEventListener('input', (e) => {
  let passwordValue = password.value;
  let errorMsg = '';

  // If password is not empty
  if (passwordValue) {
    // Lenght validation
    if (passwordValue.length < 8) {
      errorMsg += 'Must contain atleast 8 characters\r\n';
    } else {
      errorMsg += '';
    }

    // UpperCase validation
    let uppercase = '(?=.*[A-Z])';
    if (checkPattern(passwordValue, uppercase) == false) {
      errorMsg += 'Must contain atleast 1 uppercase letter\r\n';
    } else {
      errorMsg += '';
    }

    // LowerCase validation
    let lowercase = '(?=.*[a-z])';
    if (checkPattern(passwordValue, lowercase) == false) {
      errorMsg += 'Must contain atleast 1 lowercase letter\r\n';
    } else {
      errorMsg += '';
    }

    // Number validation
    let numberRegex = '(?=.*[0-9])';
    if (checkPattern(passwordValue, numberRegex) == false) {
      errorMsg += 'Must contain atleast one number\r\n';
    } else {
      errorMsg += '';
    }

    // Display all errors
    passwordError.setAttribute('style', 'white-space: pre');
    isInvalid(password);
    setErrorMsg(passwordError, errorMsg);
    showIcon('error', 2);

    // If no errors display valid
    if (passwordValue != '' && passwordError.textContent === '') {
      // No error and is valid
      showIcon('valid', 2);
      isValid(password);
      setErrorMsg(passwordError, '');
    }
  }
  // If no password input
  else {
    showIcon('error', 2);
    isInvalid(password);
    setErrorMsg(passwordError, 'Must not be empty');
  }
});

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

function checkPattern(value, pattern) {
  pattern = new RegExp(pattern);
  return pattern.test(value);
}
