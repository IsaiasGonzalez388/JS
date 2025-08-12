// EJERCICIO 10
let filas = Number(prompt("Ingrese filas:"));
let columnas = Number(prompt("Ingrese columnas:"));
if (!isNaN(filas) && !isNaN(columnas) && filas > 0 && columnas > 0) {
  let total = filas * columnas;
  let tabla = "<table border='1' cellspacing='0' cellpadding='5'>";
  for (let i = 0; i < filas; i++) {
    tabla += "<tr>";
    for (let j = 0; j < columnas; j++) {
      tabla += `<td>${total}</td>`;
      total--;
    }
    tabla += "</tr>";
  }
  tabla += "</table>";
  document.write(tabla);
} else {
  alert("Valores inválidos");
}