//Algoritmo para reversar un arreglo (invertirlo de atrás hacia adelante).

function invertirArreglo(arreglo) {
    var n = arreglo.length;
    for (var i = 0; i < n / 2; i++) {
      var temporal = arreglo[i];
      arreglo[i] = arreglo[n - 1 - i];
      arreglo[n - 1 - i] = temporal;
    }
    return arreglo;
  }
  
  var arreglo = [4, 8, 6, 2, 7, 5];
  var invertido = invertirArreglo(arreglo);
  
  console.log('El arreglo invertido de [' + arreglo + '] es: [' + invertido + ']');
  