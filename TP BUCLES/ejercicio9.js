// EJERCICIO 9
for (let i = 1; i <= 500; i++) {
  let textoNum = i.toString();
  if (i % 4 === 0) textoNum += " (Múltiplo de 4)";
  if (i % 9 === 0) textoNum += " (Múltiplo de 9)";
  console.log(textoNum);
  if (i % 5 === 0) console.log("————————————————————-");
}