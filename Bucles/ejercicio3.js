let opcion;

do {
  opcion = parseInt(prompt(
    "🧾 Menú:\n1 - Consultar saldo\n2 - Realizar extracción\n3 - Salir"
  ));

  switch (opcion) {
    case 1:
      console.log("💰 Consultando saldo...");
      break;
    case 2:
      console.log("💸 Realizando extraccion...");
      break;
    case 3:
      console.log("👋 Saliste del sistema");
      break;
    default:
      console.log("⚠️ Opción inválida, por favor elegí 1, 2 o 3");
  }

} while (opcion !== 3);