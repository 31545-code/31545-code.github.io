const inputfield = document.querySelector('input')
const button = document.querySelector('#button');
const finalResult = document.querySelector('#result');

function onButtonClick() {  
  const number = 360 / inputfield.value;
  const result = Math.round(number * 100) / 100;
  finalResult.textContent = `Result: ${result}`;
}

button.addEventListener('click', onButtonClick);