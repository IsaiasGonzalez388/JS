// EJERCICIO 16
let textoReves = prompt("Ingrese un texto:");
if (textoReves !== null) {
  let invertido = "";
  for (let i = textoReves.length - 1; i >= 0; i--) invertido += textoReves[i];
  alert(invertido);
}