// EJERCICIO 1
let edad;
do {
  edad = prompt("Ingrese su edad:");
  edad = Number(edad);

  if (isNaN(edad) || edad <= 0) {
    console.log("⚠️ Por favor ingrese un número válido.");
  } else if (edad >= 18) {
    console.log("✅ Ya puedes conducir.");
  } else {
    console.log("❌ No puedes conducir todavía.");
  }
} while (isNaN(edad) || edad <= 0);