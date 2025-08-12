// EJERCICIO 5
const letras = [
  "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X",
  "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
];
let dni;
do {
  dni = prompt("Ingrese su DNI (0 a 99999999):");
  if (dni !== null) {
    dni = Number(dni);
    if (isNaN(dni)) {
      alert("⚠️ Debe ingresar un número válido.");
    } else if (dni < 0 || dni > 99999999) {
      alert("⚠️ El número debe estar entre 0 y 99999999.");
    } else {
      let resto = dni % 23;
      alert("La letra correspondiente es: " + letras[resto]);
    }
  }
} while (dni !== null);