//Algoritmo para transformar texto en Código Morse.

function morSE(texto) {
    var morse = {
      'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
      'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
      'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
      'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
      '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--',
      '?': '..--..', '/': '-..-.', '-': '-....-', '(': '-.--.', ')': '-.--.-', ' ': '/'
    };
    var morseTexto = '';
  
    texto.toLowerCase().split('').forEach(function(caracter) {
      if (morse[caracter]) {
        morseTexto += morse[caracter] + ' ';
      } else {
        morseTexto += caracter + ' ';
      }
    });
  
    return morseTexto.trim();
  }
  
  var texto = 'Hola!';
  var morseTexto = MorSe(texto);
  
  console.log('El texto "' + texto + '" en código Morse es: ' + morseTexto);
  