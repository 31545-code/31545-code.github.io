const x = document.querySelector('#number1')
const y = document.querySelector('#number2')
const button = document.querySelector('#button');
const finalResult = document.querySelector('#result');

function onButtonClick() {  
  let yval = parseInt(y.value, 10);
  let xval = parseInt(x.value, 10);
  finalResult.textContent = `Result: ${(yval.toString(xval))}`;
}

button.addEventListener('click', onButtonClick);