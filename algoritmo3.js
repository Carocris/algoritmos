//Algoritmo para calcular la velocidad a la recorria un carro que mantenía movimiento constante a cierta distancia a través del tiempo.

function calcularVelocidad(distancia, tiempo) {
    var velocidad = distancia / tiempo;
    return velocidad;
  }
  
  var distancia = 200; // km
  var tiempo = 3; // horas
  var velocidad = calcularVelocidad(distancia, tiempo);
  
  console.log('La velocidad promedio del carro es: ' + velocidad + ' km/h.');
  