const API_KEY = 'SDgo49YW9sZ6jM5sLJCSFxsml4H8LVf5';

const container = document.querySelector('.container');
const error = document.querySelector('.error');

const form = document.querySelector('form');
const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');

let urls = [];

function getImage(url) {
  fetch(url, {
    mode: 'cors',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const imgURL = response.data.images.original.url;
      if (!urls.includes(imgURL)) {
        urls.push(imgURL);
        return imgURL;
      } else {
        console.log('already included');
        getImage(url);
      }
    })
    .then(function (response) {
      console.log('Displaying image');
      createImage(response);
    })
    .catch(function (error) {
      console.log(error);
      error.textContent = error;
    });
}

function createImage(source) {
  if (!source) return;
  const img = document.createElement('img');
  img.src = source;
  container.appendChild(img);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

searchBtn.addEventListener('click', (e) => {
  if (searchBar.value.trim() === '') return;
  container.innerHTML = '';
  urls = [];
  for (let i = 0; i < 5; i++) {
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchBar.value}`;
    getImage(url);
  }

  console.log(urls);
});
