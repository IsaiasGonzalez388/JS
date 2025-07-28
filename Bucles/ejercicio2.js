let numerosecreto = Math.floor(Math.random() * 10) + 1;
let numerodelusuario = parseInt(prompt("Ingrese un numero del 1 al 10"));
while (numerodelusuario != numerosecreto) {
  console.log("Ese numero es el incorrecto");
  numerodelusuario = parseInt(prompt("Ingrese otro numero"));
}
console.log("Adivinaste el numero");
