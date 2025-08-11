let alumnos = [
  { nombre: "Juan", nota: 8 },
  { nombre: "María", nota: 5 },
  { nombre: "Pedro", nota: 6 }
];

alumnos.forEach(alumno => {
  let resultado = alumno.nota >= 6 ? "Aprobado" : "Desaprobado";
  console.log(`${alumno.nombre}: ${resultado}`);
});