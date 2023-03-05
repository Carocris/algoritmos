//Algoritmo para calcular la distancia recorrida por un carro que mantenía movimiento constante.

function calcularDistanciaRecorrida(velocidad, tiempo) {
    var distancia = velocidad * tiempo;
    return distancia;
  }
  
  var velocidad = 60; // km/h
  var tiempo = 2.5; // horas
  var distanciaRecorrida = calcularDistanciaRecorrida(velocidad, tiempo);
  
  console.log('La distancia recorrida por el carro es: ' + distanciaRecorrida + ' km.');
  

