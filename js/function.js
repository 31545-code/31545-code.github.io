const inputfield6 = document.querySelector('#number6');
const inputfield5 = document.querySelector('#number5');
const inputfield4 = document.querySelector('#number4');
const inputfield3 = document.querySelector('#number3');
const inputfield2 = document.querySelector('#number2');
const inputfield1 = document.querySelector('#number1');
const inputfield0 = document.querySelector('#number0');
const x = document.querySelector('#x');
const button = document.querySelector('#button');
const finalResult = document.querySelector('#result');


function onButtonClick() {  
  let number = inputfield6.value * Math.pow(x.value, 6) + inputfield5.value * Math.pow(x.value, 5) + inputfield4.value * Math.pow(x.value, 4);
  number = number + inputfield3.value * Math.pow(x.value, 3) + inputfield2.value * Math.pow(x.value, 2) + inputfield1.value * x.value + inputfield0.value * 1;
  finalResult.textContent = `Result: ${number}`
}

button.addEventListener('click', onButtonClick);