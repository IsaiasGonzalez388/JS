// EJERCICIO 11
let n1 = prompt("Nombre 1:"); let e1 = Number(prompt("Edad de " + n1 + ":"));
let n2 = prompt("Nombre 2:"); let e2 = Number(prompt("Edad de " + n2 + ":"));
let n3 = prompt("Nombre 3:"); let e3 = Number(prompt("Edad de " + n3 + ":"));
if (isNaN(e1) || isNaN(e2) || isNaN(e3)) {
  alert("Edades inválidas");
} else {
  let mayor = Math.max(e1, e2, e3);
  let nombreMayor = (mayor === e1) ? n1 : (mayor === e2) ? n2 : n3;
  alert(`El mayor es ${nombreMayor} con ${mayor} años`);
}