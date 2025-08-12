// EJERCICIO 15
let textoVocales = prompt("Ingrese un texto:");
if (textoVocales !== null) {
  let contador = 0;
  let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  for (let i = 0; i < textoVocales.length; i++) {
    if (vocales.includes(textoVocales[i])) contador++;
  }
  alert("Cantidad de vocales: " + contador);
}