const API_KEY = 'SDgo49YW9sZ6jM5sLJCSFxsml4H8LVf5';

const url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`;
const img = document.querySelector('img');

const btn = document.querySelector('#btn');
const error = document.querySelector('.error');
btn.addEventListener('click', () => {
  error.textContent = '';
  fetch(url, {
    mode: 'cors',
  })
    .then(function (response) {
      console.log('Loading image');
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
      console.log('Sucess');
    })
    .catch(function (error) {
      console.log(error);
      error.textContent = error;
    });
});
