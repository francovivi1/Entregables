import { Vehiculo } from "./vehiculo.js";
import { RegistroAutomotor } from "./automotor.js";

function main() {
  const registroAutomotor = new RegistroAutomotor([], [], []);

  // Crear vehículos
  const auto = new Vehiculo("Auto", "Jeep", "Renegade", 2023);
  const auto2 = new Vehiculo("Auto", "Fiat", "Palio", 2017);
  const moto = new Vehiculo("Moto", "Kawasaki", "Vulcan", 2021);
  const moto2 = new Vehiculo("Moto", "Yamaha", "MT-09", 2022);
  const camion = new Vehiculo("Camion", " Scania", "R450", 2021);
  const camion2 = new Vehiculo("Camion", "Iveco", "Eurotech", 2020);

  // Agregar vehículos al registro
  registroAutomotor.agregarVehiculo("auto", auto);
  registroAutomotor.agregarVehiculo("auto", auto2);
  registroAutomotor.agregarVehiculo("moto", moto);
  registroAutomotor.agregarVehiculo("moto", moto2);
  registroAutomotor.agregarVehiculo("camion", camion);
  registroAutomotor.agregarVehiculo("camion", camion2);

  // Mostrar los vehículos registrados
  console.log("Auto registrado:", registroAutomotor.getAutos());
  console.log("Moto registrada:", registroAutomotor.getMotos());
  console.log("Camion registrado:", registroAutomotor.getCamiones());

  // Modificar un vehículo
  const nuevoAuto = new Vehiculo("Auto", "Fiat", "206", 2007);
  registroAutomotor.modificarVehiculo("auto", auto, nuevoAuto);
  console.log("Auto modificado:", registroAutomotor.getAutos());

  // Dar de baja los vehículos
  registroAutomotor.darBaja("auto", nuevoAuto);
  registroAutomotor.darBaja("moto", moto);
  registroAutomotor.darBaja("camion", camion);

  // Mostrar los vehículos después de darlos de baja
  console.log(
    "Autos que quedaron despues dado de baja despues de eliminar los otros:",
    registroAutomotor.getAutos()
  );
  console.log(
    "Motos que quedaron despues dado de baja despues de eliminar los otros:",
    registroAutomotor.getMotos()
  );
  console.log(
    "Camione que quedaron despues de eliminar los otros:",
    registroAutomotor.getCamiones()
  );
}

main();
