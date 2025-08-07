let palabras = ["perro", "gato", "elefante", "jirafa"];

let palabraBuscada = "elefante";

let posicion = palabras.indexOf(palabraBuscada);

if (posicion !== -1) {
  console.log(`La palabra "${palabraBuscada}" está en la posición ${posicion}.`);
} else {
  console.log(`La palabra "${palabraBuscada}" no se encuentra en el array.`);
}