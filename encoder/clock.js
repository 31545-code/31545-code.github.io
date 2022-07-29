const number1 = document.querySelector('#number1')
const number2 = document.querySelector('#number2')
const button = document.querySelector('#button');
const finalResult = document.querySelector('#result');

function onButtonClick() {  
  let hd = number1.value * 30
  const md = number2.value * 6
  const extra = 0.5 * number2.value
  let result = 0
  hd = hd + extra
  if (hd > md) {
    let gap = hd-md
    if (180 < gap) {
      result = 360-gap
    } else {
      result = gap
    }
  } else if (hd < md) {
    let gap = md-hd
    if (180 < gap) {
      result = 360 - gap
    } else {
      result = gap
    }
  }
  const final = Math.round(result)
  finalResult.textContent = `Result: ${final}`
}

button.addEventListener('click', onButtonClick);