const input = document.querySelector('input');
const button = document.querySelector('#button');
const finalResult = document.querySelector('#result');

function onButtonClick() {  
  let val = Array.from(input.value)

  let result = ''
  for (let i = 0; i < val.length; i++) {
    switch (val[i]) {
      case 'a': result = result + 'H'
      break
      case 'b': result = result + 'He'
      break
      case 'c': result = result + 'Li'
      break
      case 'd': result = result + 'Be'
      break
      case 'e': result = result + 'B'
      break
      case 'f': result = result + 'C'
      break
      case 'g': result = result + 'N'
      break
      case 'h': result = result + 'O'
      break
      case 'i': result = result + 'F'
      break
      case 'j': result = result + 'Ne'
      break
      case 'k': result = result + 'Na'
      break
      case 'l': result = result + 'Mg'
      break
      case 'm': result = result + 'Al'
      break
      case 'n': result = result + 'Si'
      break
      case 'o': result = result + 'P'
      break
      case 'p': result = result + 'S'
      break
      case 'q': result = result + 'Cl'
      break
      case 'r': result = result + 'Ar'
      break
      case 's': result = result + 'K'
      break
      case 't': result = result + 'Ca'
      break
      case 'u': result = result + 'Sc'
      break
      case 'v': result = result + 'Ti'
      break
      case 'w': result = result + 'V'
      break
      case 'x': result = result + 'Cr'
      break
      case 'y': result = result + 'Mn'
      break
      case 'z': result = result + 'Fe'
      break
      case 'A': result = result + 'Co'
      break
      case 'B': result = result + 'Ni'
      break
      case 'C': result = result + 'Cu'
      break
      case 'D': result = result + 'Zn'
      break
      case 'E': result = result + 'Ga'
      break
      case 'F': result = result + 'Ge'
      break
      case 'G': result = result + 'As'
      break
      case 'H': result = result + 'Se'
      break
      case 'I': result = result + 'Br'
      break
      case 'J': result = result + 'Kr'
      break
      case 'K': result = result + 'Rb'
      break
      case 'L': result = result + 'Sr'
      break
      case 'M': result = result + 'Y'
      break
      case 'N': result = result + 'Zr'
      break
      case 'O': result = result + 'Nb'
      break
      case 'P': result = result + 'Mo'
      break
      case 'Q': result = result + 'Tc'
      break
      case 'R': result = result + 'Ru'
      break
      case 'S': result = result + 'Rh'
      break
      case 'T': result = result + 'Pd'
      break
      case 'U': result = result + 'Ag'
      break
      case 'V': result = result + 'Cd'
      break
      case 'W': result = result + 'In'
      break
      case 'X': result = result + 'Sn'
      break
      case 'Y': result = result + 'Sb'
      break
      case 'Z': result = result + 'Te'
      break
      case '.': result = result + 'Yb'
      break
      case ' ': result = result + ' '
      break
      default: result = 'undefined'
      break
    }
  }
  finalResult.textContent = `Result: ${result}`
}

button.addEventListener('click', onButtonClick);