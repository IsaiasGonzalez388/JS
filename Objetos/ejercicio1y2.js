let producto = {
  nombre: "Detergente",
  precio: 3000,
  Stock: "Disponible",
};

let { nombre, Stock } = producto;
console.log("Nombre:", nombre);
console.log("Stock:", Stock);

producto.marca = "Magistral";
producto["precio"] = 4000;

console.log(producto);