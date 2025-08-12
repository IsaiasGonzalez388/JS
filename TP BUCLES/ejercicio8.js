// EJERCICIO 8
let numPiramide = Number(prompt("Ingrese un número (máx 50):"));
if (!isNaN(numPiramide) && numPiramide > 0 && numPiramide <= 50) {
  for (let i = 1; i <= numPiramide; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    console.log(linea);
  }
} else {
  alert("Número inválido");
}