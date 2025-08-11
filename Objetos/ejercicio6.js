let productos = [
  { nombre: "Detergente", precio: 4000 },
  { nombre: "Shampoo", precio: 2500 },
  { nombre: "Jabón", precio: 1500 }
];

productos.forEach(producto => {
  console.log(`El producto ${producto.nombre} cuesta ${producto.precio} pesos`);
});
