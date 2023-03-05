
//Algoritmo visualizar la cantidad de dígitos que se le indique de la sucessión de fibonacci.

function fibonacciDigitos(cantidadDigitos) {
    var a = 0;
    var b = 1;
    var fib = [a, b];
  
    while (fib[fib.length - 1].toString().length < cantidadDigitos) {
      var c = a + b;
      fib.push(c);
      a = b;
      b = c;
    }
  
    return fib;
  }
  
  var cantidadDigitos = 3;
  var fib = fibonacciDigitos(cantidadDigitos);
  
  console.log('Los primeros números de Fibonacci con ' + cantidadDigitos + ' dígitos son: ' + fib.join(', '));
  