let isPressed = false;
let pressedTime = 0;
let prevClickTime = microtime(true);
let randomValue = 0;
let delay = 1; // seconds it will take to add space in the output

document.addEventListener('keydown', e => {
  if (isPressed == true) return; // prevent multiple clicks if hold
  if (e.key === ' ') {
    console.clear();
    pressedTime = microtime(true);
    box.classList.add('pressed');

    calculateInterval();
    isPressed = true;
  }
});

document.addEventListener('keyup', e => {
  if (e.key === ' ') {
    const time = calculateTimePressed();

    if (randomValue > delay && output.value != '') {
      console.log(randomValue);
      output.value += ' ';
    }

    if (time < 0.1) {
      output.value += '.';
    } else {
      output.value += '-';
    }

    box.classList.remove('pressed');
    isPressed = false;
  }
});

function microtime(get_as_float) {
  const now = new Date().getTime() / 1000;
  const s = parseInt(now, 10);
  const time = (Math.round((now - s) * 1000) / 1000).toFixed(5);
  return get_as_float ? now : `${time} s`;
}

function calculateInterval() {
  const clickTime = microtime(true);
  const clickInterval = clickTime - prevClickTime;
  console.log(`Click Interval: ${clickInterval}`);

  // new clicktime will be previous click time
  prevClickTime = clickTime;
  randomValue = clickInterval;
}

function calculateTimePressed() {
  const clickTime = microtime(true);
  const holdTime = clickTime - pressedTime;
  console.log(`Pressed for ${holdTime}s`);
  return holdTime;
}

const box = document.querySelector('.box');
const output = document.querySelector('.output');
const btn = document.querySelector('.reset');

btn.addEventListener('click', e => {
  output.value = '';
});
