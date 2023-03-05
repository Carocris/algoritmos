//Algoritmo que me genere un OTP de seis dígitos.


function generarOTP() {
    var digits = '0123456789';
    var otp = '';
    for (var i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }
  
  var otp = generarOTP();
  console.log('El OTP generado es: ' + otp);
  