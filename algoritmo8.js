//Algoritmo para decodificar mensajes utilizando Cifrado de César.

function descifradoCesar(mensajeCifrado, desplazamiento) {
    var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var mensajeDescifrado = '';
  
    for (var i = 0; i < mensajeCifrado.length; i++) {
      var letra = mensajeCifrado[i];
      var posicion = alfabeto.indexOf(letra.toUpperCase());
  
      if (posicion !== -1) {
        var nuevaPosicion = (posicion - desplazamiento + alfabeto.length) % alfabeto.length;
        var nuevaLetra = alfabeto[nuevaPosicion];
        if (letra === letra.toUpperCase()) {
          mensajeDescifrado += nuevaLetra;
        } else {
          mensajeDescifrado += nuevaLetra.toLowerCase();
        }
      } else {
        mensajeDescifrado += letra;
      }
    }
  
    return mensajeDescifrado;
  }
  
  var mensajeCifrado = 'Krod Pxqgr';
  var desplazamiento = 3;
  var mensajeDescifrado = descifradoCesar(mensajeCifrado, desplazamiento);
  
  console.log('El mensaje cifrado "' + mensajeCifrado + '" descifrado con Cifrado de César es: ' + mensajeDescifrado);
  