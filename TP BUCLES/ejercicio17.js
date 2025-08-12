// EJERCICIO 17
let textoPos = prompt("Ingrese un texto:");
if (textoPos !== null) {
  let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  let posicion = -1;
  let vocalEncontrada = "";
  for (let i = 0; i < textoPos.length; i++) {
    if (vocales.includes(textoPos[i])) {
      posicion = i;
      vocalEncontrada = textoPos[i];
      break;
    }
  }
  if (posicion !== -1) {
    alert(\`La vocal '\${vocalEncontrada}' está en la posición \${posicion}\`);
  } else {
    alert("No hay vocales en el texto");
  }
}