const inputfield = document.querySelector('input')
const button = document.querySelector('#button');
const finalResult = document.querySelector('#result');

function primeFactors(n){

    if (n == 1) return [1];
    var factors = [], 
        divisor = 2;
    
    while(n>=2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }

function onButtonClick() {
  const factorlist = primeFactors(inputfield.value);
    let result = 0;
    for (let i = 0; i < factorlist.length; i++) {
      result = result + Math.pow(i+2,factorlist[factorlist.length-i-1]);
      console.log(result);
    }
    finalResult.textContent = `Result: ${result}`;
}

button.addEventListener('click', onButtonClick);