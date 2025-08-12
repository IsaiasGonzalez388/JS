// EJERCICIO 3
let texto = "";
let seguir;
do {
  let cadena = prompt("Ingrese una cadena de texto:");
  if (cadena !== null) {
    texto += texto === "" ? cadena : "-" + cadena;
  }
  seguir = confirm("¿Desea ingresar otra cadena?");
} while (seguir);
alert("Texto final: " + texto);