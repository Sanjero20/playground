let prevClickTime = microtime(true);

document.addEventListener('keydown', e => {
  console.clear();
  if (e.key === ' ') {
    const clickTime = microtime(true);
    const timeDiff = clickTime - prevClickTime;
    console.log(timeDiff);

    // new clicktime will be previous click time
    prevClickTime = clickTime;
  }
});

function microtime(get_as_float) {
  const now = new Date().getTime() / 1000;
  const s = parseInt(now, 10);

  return get_as_float ? now : `${Math.round((now - s) * 1000) / 1000} s`;
}
