//Algoritmo para encontrar "La Mediana" en un arreglo de números.

function encontrarMediana(arreglo) {
    var n = arreglo.length;
    var mitad = Math.floor(n / 2);
  
    arreglo.sort(function(a, b) { return a - b; });
  
    if (n % 2 === 0) {
      return (arreglo[mitad - 1] + arreglo[mitad]) / 2;
    } else {
      return arreglo[mitad];
    }
  }
  
  var arreglo = [4, 8, 6, 2, 7, 5];
  var mediana = encontrarMediana(arreglo);
  
  console.log('La mediana del arreglo [' + arreglo + '] es: ' + mediana);
  