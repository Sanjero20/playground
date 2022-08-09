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
  const inputsForms = [...formInputs];
  const allInputsValid = inputsForms.every((input) =>
    input.classList.contains('valid')
  );

  if (allInputsValid) {
    let user = createUser(userName.value.trim(), email.value, password.value);
    resetForm();

    console.log(user);
  } else {
    // show all errors
    validateUsername();
    validateEmail();
    validatePassword();
    checkPassword();
  }
});

// If input is empty and out of focus,
// Remove validation indicators
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
  validateUsername();
});

email.addEventListener('input', (e) => {
  validateEmail();
});

password.addEventListener('input', (e) => {
  validatePassword();
});

confirmPassword.addEventListener('input', (e) => {
  checkPassword();
});

// form functions
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

function resetForm() {
  formInputs.forEach((input, index) => {
    input.value = '';
    removeValidityClass(input);
    hideIcon(errorIcons[index]);
    hideIcon(checkIcons[index]);
  });
}

function createUser(username, email, password) {
  return {
    username: username,
    email: email,
    password: password,
  };
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

// validation functions
function validateUsername() {
  if (userName.value.trim() === '') {
    isInvalid(userName);
    setErrorMsg(userNameError, 'Must not be empty');
    showIcon('error', 0);
  } else {
    isValid(userName);
    setErrorMsg(userNameError, '');
    showIcon('valid', 0);
  }
}

function validateEmail() {
  if (email.value === '') {
    isInvalid(email);
    setErrorMsg(emailError, 'Must not be empty');
    showIcon('error', 1);
  } else if (email.validity.typeMismatch) {
    isInvalid(email);
    setErrorMsg(emailError, 'Must be a valid email address');
    showIcon('error', 1);
  } else {
    isValid(email);
    setErrorMsg(emailError, '');
    showIcon('valid', 1);
  }
}

function validatePassword() {
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
}

function checkPassword() {
  if (confirmPassword.value === '') {
    showIcon('error', 3);
    isInvalid(confirmPassword);
    setErrorMsg(cPasswordError, 'Must not be empty');
  } else if (confirmPassword.value === password.value) {
    showIcon('valid', 3);
    isValid(confirmPassword);
    setErrorMsg(cPasswordError, '');
  } else {
    showIcon('error', 3);
    isInvalid(confirmPassword);
    setErrorMsg(cPasswordError, 'Password do not match');
  }
}
