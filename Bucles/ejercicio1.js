let multiplotres = 50;
let contador = 0;

for (let i = 1; i <= multiplotres; i++) {
  if (i % 3 === 0) {
    console.log(i, "Es multiplo de 3");
    contador++;
  } else {
    console.log(i, "No es multiplo de 3");
  }
}
console.log("La cantidad de multiplos por 3 fue:", contador);
