let personas = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 15 },
  { nombre: "Pedro", edad: 30 }
];

personas.forEach(persona => {
  persona.mayorDeEdad = persona.edad >= 18 ? true : false;
});

console.log(personas);