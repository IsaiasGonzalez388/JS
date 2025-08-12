// EJERCICIO 2
let nota = prompt("Ingrese una nota (0 a 10):");
nota = Number(nota);

if (isNaN(nota)) {
  alert("Introduce un número válido");
} else if (nota < 0 || nota > 10) {
  alert("Número erróneo");
} else {
  if (nota <= 2) alert("Muy deficiente");
  else if (nota <= 4) alert("Insuficiente");
  else if (nota <= 6) alert("Suficiente");
  else if (nota === 7) alert("Bien");
  else if (nota <= 9) alert("Notable");
  else alert("Sobresaliente");
}