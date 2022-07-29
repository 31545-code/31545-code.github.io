const inputfield = document.querySelector('input')
const button = document.querySelector('#button');
const finalResult = document.querySelector('#result');

function onButtonClick() {
  const result = 4 * Math.pow(inputfield.value, 3);
  finalResult.textContent = `Result: ${result}`
}
button.addEventListener('click', onButtonClick);