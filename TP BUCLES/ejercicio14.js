// EJERCICIO 14
let cadena = prompt("Ingrese texto para guiones:");
if (cadena !== null) {
  let resultado = "";
  for (let i = 0; i < cadena.length; i++) {
    resultado += cadena[i];
    if (i < cadena.length - 1) resultado += "-";
  }
  alert(resultado);
}