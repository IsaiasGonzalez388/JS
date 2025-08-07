let numeros = [30, 50, 10, 35];

let fahrenheit = numeros.map(function(celsius) {
  return celsius * 1.8 + 32;
});

console.log(fahrenheit);