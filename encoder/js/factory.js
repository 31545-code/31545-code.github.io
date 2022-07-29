const inputfield = document.querySelector('input')
const button = document.querySelector('#button');
const finalResult = document.querySelector('#result');

function findNumber (n) {
  let num = n;
  let i = 1;
  while (num != 1) {
    num = num / i;
    i++;
    if (num < 1) {
      i = 0;
      return -1
    }
  }
  return i-1
}
function onButtonClick() {  
  const number = findNumber(inputfield.value);
  if (number == -1) {
    finalResult.textContent = '알맞지 않은 키입니다.'
    return
  } else {
    finalResult.textContent = ` Result: ${number * (number + 1) / 2}`
  }
}

button.addEventListener('click', onButtonClick);