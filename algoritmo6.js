//Algoritmo para transformar Código Morse en texto.

function morseA(morseTexto) {
    var morse = {
      '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h',
      '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p',
      '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
      '-.--': 'y', '--..': 'z', '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
      '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '.-.-.-': '.', '--..--': ',',
      '..--..': '?', '-..-.': '/', '-....-': '-', '-.--.': '(', '-.--.-': ')', '/': ' '
    };
    var texto = '';
  
    morseTexto.trim().split(' ').forEach(function(caracter) {
      if (morse[caracter]) {
        texto += morse[caracter];
      } else {
        texto += caracter;
      }
    });
  
    return texto;
  }
  
  var morseTexto = '.... --- .-.. .- / -- ..- -. -.. --- -.-. --- -.-. ..-.-.';
  var texto = morseA(morseTexto);
  
  console.log('El texto en código Morse "' + morseTexto + '" es: ' + texto);
  