//Algoritmo para calcular el tiempo transcurrido por un carro que mantenía movimiento constante desplazandose a un lugar.

function calcularTiempoTranscurrido(distancia, velocidad) {
    var tiempo = distancia / velocidad;
    return tiempo;
  }
  
  var distancia = 250; // km
  var velocidad = 80; // km/h
  var tiempoTranscurrido = calcularTiempoTranscurrido(distancia, velocidad);
  
  console.log('El tiempo transcurrido es de: ' + tiempoTranscurrido + ' horas.');
  