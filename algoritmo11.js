//Algoritmo para encontrar "La Moda" en un arreglo.

function encontrarModa(arreglo) {
    var n = arreglo.length;
    var contador = {};
    var moda = [];
  
    for (var i = 0; i < n; i++) {
      if (contador[arreglo[i]]) {
        contador[arreglo[i]]++;
      } else {
        contador[arreglo[i]] = 1;
      }
    }
  
    var max = 0;
    for (var llave in contador) {
      if (contador[llave] > max) {
        moda = [Number(llave)];
        max = contador[llave];
      } else if (contador[llave] === max) {
        moda.push(Number(llave));
      }
    }
  
    if (moda.length === n) {
      moda = [];
    }
  
    return moda;
  }
  
  var arreglo = [4, 8, 6, 2, 7, 5, 6, 7, 8, 8];
  var moda = encontrarModa(arreglo);
  
  console.log('La moda del arreglo [' + arreglo + '] es: ' + moda);
  