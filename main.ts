import { vehiculo } from "./vehiculo";
import { RegristroAutomotor } from "./Automotor";

function main() {
  const registroAutomotor = new RegristroAutomotor([], [], []);

  // Crear vehículos
  const auto = new vehiculo("Auto", "Jeep", "Renegade", 2023);
  const moto = new vehiculo("Moto", "Kawasaki", "Vulcan", 2021);
  const camion = new vehiculo("Camion", "Iveco", "Eurotech", 2020);

  // Agregar vehículos al registro
  registroAutomotor.agregarVehiculo("Auto", auto);
  registroAutomotor.agregarVehiculo("Moto", moto);
  registroAutomotor.agregarVehiculo("Camion", camion);

  // Mostrar los vehículos registrados
  console.log("Auto registrado:", registroAutomotor.getAutos());
  console.log("Moto registrada:", registroAutomotor.getMotos());
  console.log("Camion registrado:", registroAutomotor.getCamion());

  // Modificar un vehículo
  const nuevoAuto = new vehiculo("Auto", "Fiat", "206", 2007);
  registroAutomotor.modificarVehiculo("Auto", auto, nuevoAuto);
  console.log("Auto modificado:", registroAutomotor.getAutos());

  // Dar de baja los vehículos
  registroAutomotor.darBaja("Auto", nuevoAuto);
  registroAutomotor.darBaja("Moto", moto);
  registroAutomotor.darBaja("Camion", camion);

  // Mostrar los vehículos después de darlos de baja
  console.log("Autos dado de baja:", registroAutomotor.getAutos());
  console.log("Motos dado de baja:", registroAutomotor.getMotos());
  console.log("Camion dado de baja:", registroAutomotor.getCamion());
}
main();

//sstas
