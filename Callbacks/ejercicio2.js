let palabras = ["auto", "telescopio"];

let palabrasLargas = palabras.filter(function(palabra) {
  return palabra.length > 5;
});

console.log(palabrasLargas);