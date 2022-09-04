let isPressed = false;
let pressedTime = 0;
let prevClickTime = microtime(true);

document.addEventListener('keydown', e => {
  if (isPressed == true) return;
  if (e.key === ' ') {
    console.clear();
    pressedTime = microtime(true);
    box.classList.add('pressed');
    calculateTime();

    isPressed = true;
  }
});

document.addEventListener('keyup', e => {
  if (e.key === ' ') {
    calculateTimePressed();
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

function calculateTime() {
  const clickTime = microtime(true);
  const clickInterval = clickTime - prevClickTime;
  console.log(`Click Interval: ${clickInterval}`);

  // new clicktime will be previous click time
  prevClickTime = clickTime;
  return clickInterval;
}

function calculateTimePressed() {
  const clickTime = microtime(true);
  const holdTime = clickTime - pressedTime;
  console.log(`Pressed for ${holdTime}s`);
  return holdTime;
}

const box = document.querySelector('.box');
