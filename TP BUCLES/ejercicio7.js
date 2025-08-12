// EJERCICIO 7
let numInverso = Number(prompt("Ingrese un número (máx 50):"));
if (!isNaN(numInverso) && numInverso > 0 && numInverso <= 50) {
  for (let i = numInverso; i >= 1; i--) {
    console.log(i.toString().repeat(i));
  }
} else {
  alert("Número inválido");
}