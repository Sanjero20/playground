let isPressed = false;
let prevClickTime = 0;

// Seconds it will take to add space in the output
let delay = 0.5;

// Time between each keydown and keyup
let startHoldTime = 0;
let stopHoldTime = 0;
let keyholdTime = 0;

// Time between each keys
let startInterval = microtime(true);
let stopInterval = 0;
let pressInterval = 0;

document.addEventListener('keydown', e => {
  if (isPressed == true) return; // prevent multiple clicks if hold
  if (e.key === ' ') {
    box.classList.add('pressed');
    console.clear();
    startHoldTime = microtime(true);
    stopInterval = microtime(true);

    // calculate time between each key
    pressInterval = stopInterval - startInterval;
    console.log('Interval:\t' + pressInterval);

    isPressed = true;
  }
});

document.addEventListener('keyup', e => {
  isPressed = false;
  box.classList.remove('pressed');

  if (e.key === ' ') {
    stopHoldTime = microtime(true);
    startInterval = microtime(true);

    // calculate time between hold press
    keyholdTime = stopHoldTime - startHoldTime;
    console.log('Hold Time:\t' + keyholdTime);

    if (pressInterval > delay && output.value != '') {
      output.value += ' ';
    }

    if (keyholdTime < 0.1) {
      output.value += '.';
    } else {
      output.value += '-';
    }
  }
});

function microtime(get_as_float) {
  const now = new Date().getTime() / 1000;
  const s = parseInt(now, 10);
  const time = Math.round((now - s) * 1000) / 1000;
  return get_as_float ? now : `${time} s`;
}

// DOM Elements
const box = document.querySelector('.box');
const output = document.querySelector('.output');
const btn = document.querySelector('.reset');

btn.addEventListener('click', e => {
  output.value = '';
});
