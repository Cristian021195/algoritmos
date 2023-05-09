console.log(contarDigitosPares(2635956));
function contarDigitosPares(numero) {// Caso base: si el número es menor que 10, verificamos si es par y lo contamos.
    if (numero < 10) {
      if (numero % 2 === 0) {
        return 1;
      } else {
        return 0;
      }
    } else {// Caso recursivo: contamos el último dígito y llamamos a la función con el resto del número.
      let ultimoDigito = numero % 10;
      if (ultimoDigito % 2 === 0) {
        return 1 + contarDigitosPares(Math.floor(numero / 10));
      } else {
        return contarDigitosPares(Math.floor(numero / 10));
      }
    }
  }
  

  /*
  
FUNCION DIGITOS_PARES(n): entero >= 0 -> entero 
    SI n < 10 ENTONCES
        SI (n mod 2 = 0) ENTONCES
            retorna(1)    
        SINO 
            retorna(0)
    SINO
        SI ((n mod 10) mod 2 = 0) ENTONCES
            retorna (1 + DIGITOS_PARES(n/10))
        SINO
            retorna (DIGITOS_PARES(n/10))
FIN
  
  */