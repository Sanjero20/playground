const boxes = document.querySelectorAll('.box');
const fill = document.querySelector('.fill');

// Fill listener
fill.addEventListener('dragstart', () => {
  setTimeout(() => {
    fill.classList.add('invisible');
  }, 25);
});

fill.addEventListener('dragend', () => {
  fill.className = 'fill';
});

// Box event
for (const box of boxes) {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
}

// Drag Function
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.className = 'box';
}

function dragDrop() {
  this.className = 'box';
  this.append(fill);
}
