// EJERCICIO 4
let suma = 0;
let numero;
do {
  numero = prompt("Ingrese un número:");
  if (numero !== null) {
    numero = Number(numero);
    if (isNaN(numero)) {
      alert("⚠️ Eso no es un número válido.");
    } else {
      suma += numero;
    }
  }
} while (numero !== null);
alert("La suma total es: " + suma);