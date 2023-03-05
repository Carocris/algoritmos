//Algoritmo para validar si dentro de una lista de palabras existe algún palíndromo.

function esPalindromo(palabra) {
    var n = palabra.length;
    for (var i = 0; i < n / 2; i++) {
      if (palabra[i] !== palabra[n - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  function validarPalindromoEnLista(lista) {
    var n = lista.length;
    for (var i = 0; i < n; i++) {
      if (esPalindromo(lista[i])) {
        return true;
      }
    }
    return false;
  }
  
  var lista = ['oso', 'casa', 'radar', 'silla', 'reconocer'];
  var resultado = validarPalindromoEnLista(lista);
  
  if (resultado) {
    console.log('La lista contiene al menos un palíndromo.');
  } else {
    console.log('La lista no contiene palíndromos.');
  }
  