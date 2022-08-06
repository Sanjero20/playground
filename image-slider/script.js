const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const slides = document.querySelectorAll('.slides');
const dotIndicator = document.querySelectorAll('.circle');

let currentImageIndex = 0; // By default first img will be shown

prevBtn.onclick = () => {
  currentImageIndex -= 1;
  showSlide();
};

nextBtn.onclick = () => {
  currentImageIndex += 1;
  showSlide();
};

dotIndicator.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentImageIndex = index + 1;
    showSlide();
  });
});

// funcitons
function showSlide() {
  removeClass(slides, 'active');
  removeClass(dotIndicator, 'active');

  if (currentImageIndex > slides.length) {
    currentImageIndex = 1;
  }

  if (currentImageIndex <= 0) {
    currentImageIndex = slides.length;
  }

  slides[currentImageIndex - 1].classList.add('active');
  dotIndicator[currentImageIndex - 1].classList.add('active');
}

function removeClass(elements, elementClass) {
  elements.forEach((element) => {
    element.classList.remove(elementClass);
  });
}

function autoPlaySlides() {
  setTimeout(() => {
    showSlide();
  }, 3000);
}
