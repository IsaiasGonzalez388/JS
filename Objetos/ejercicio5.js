let usuarioBase = {
  nombre: "Lucas",
  edad: 25
};

let usuarioExtendido = {
  ...usuarioBase,
  activo: true
};

console.log(usuarioExtendido);