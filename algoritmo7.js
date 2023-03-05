//Algoritmo para codificar mensajes utilizando Cifrado de César.

function cifradoCesar(mensaje, desplazamiento) {
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    var cifrado = '';
  
    for (var i = 0; i < mensaje.length; i++) {
      var letra = mensaje[i];
      var posicion = alfabeto.indexOf(letra);
  
      if (posicion !== -1) {
        var nuevaPosicion = (posicion + desplazamiento) % alfabeto.length;
        var nuevaLetra = alfabeto[nuevaPosicion];
        cifrado += nuevaLetra;
      } else {
        cifrado += letra;
      }
    }
  
    return cifrado;
  }
  
  var mensaje = 'hola mundo';
  var desplazamiento = 3;
  var mensajeCifrado = cifradoCesar(mensaje, desplazamiento);
  
  console.log('El mensaje "' + mensaje + '" cifrado con Cifrado de César es: ' + mensajeCifrado);
  