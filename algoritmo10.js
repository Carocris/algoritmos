//Algoritmo para encontrar "El Promedio" en un arreglo de números.

function encontrarPromedio(arreglo) {
    var n = arreglo.length;
    var suma = 0;
  
    for (var i = 0; i < n; i++) {
      suma += arreglo[i];
    }
  
    return suma / n;
  }
  
  var arreglo = [4, 8, 6, 2, 7, 5];
  var promedio = encontrarPromedio(arreglo);
  
  console.log('El promedio del arreglo [' + arreglo + '] es: ' + promedio);
  