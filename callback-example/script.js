function something(text) {
  const body = document.querySelector('body');
  const element = document.createElement('div');
  element.textContent = `Output: ${text}`;
  body.appendChild(element);
}

function display(text, callback) {
  callback(text);
}

display('Hello World', something);
