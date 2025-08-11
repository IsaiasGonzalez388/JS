function mostrarInfo(obj) {
  for (let clave in obj) {
    console.log(`${clave}: ${obj[clave]}`);
  }
}

let producto = {
  nombre: "Detergente",
  precio: 4000,
  stock: "Disponible",
  marca: "Magistral"
};

mostrarInfo(producto);