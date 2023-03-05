//Algoritmo que retorne el elemento diferente dentro de un arreglo.

function encontrarDiferente(arreglo) {
    var n = arreglo.length;
    var suma = 0;
    var sumaEsperada = n * (n + 1) / 2;
  
    for (var i = 0; i < n; i++) {
      suma += arreglo[i];
    }
  
    return sumaEsperada - suma;
  }
  
  var arreglo = [4, 8, 6, 2, 7, 5, 9];
  var diferente = encontrarDiferente(arreglo);
  
  console.log('El elemento diferente en el arreglo [' + arreglo + '] es: ' + diferente);
  