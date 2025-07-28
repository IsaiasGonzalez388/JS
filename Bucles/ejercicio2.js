let numerosecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 1;

let numerodelusuario = parseInt(prompt("Ingrese un número del 1 al 10"));

while (numerodelusuario != numerosecreto) {
  console.log("Ese número es incorrecto");
  numerodelusuario = parseInt(prompt("Ingrese otro número"));
  intentos++;
}

if (intentos === 1) {
  console.log("🎉 ¡Adivinaste al primer intento! ¡Increíble!");
} else {
  console.log(`✅ Adivinaste el número en ${intentos} intentos`);
}