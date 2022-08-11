function displayToScreen(value) {
  const body = document.querySelector('body');
  body.textContent = value;
}

let myPromise = new Promise(function (resolve, reject) {
  let value = 0;

  if (value > 0) {
    resolve('Success');
  } else {
    reject('Error 404');
  }
});

console.log(myPromise);

myPromise.then(
  function (value) {
    displayToScreen(value);
  },
  function (error) {
    displayToScreen(error);
  }
);
