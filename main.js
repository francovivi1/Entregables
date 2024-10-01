"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehiculo_1 = require("./vehiculo");
var Automotor_1 = require("./Automotor");
function main() {
    var registroAutomotor = new Automotor_1.RegristroAutomotor([], [], []);
    // Crear vehículos
    var auto = new vehiculo_1.vehiculo("Auto", "Jeep", "Renegade", 2023);
    var moto = new vehiculo_1.vehiculo("Moto", "Kawasaki", "Vulcan", 2021);
    var camion = new vehiculo_1.vehiculo("Camion", "Iveco", "Eurotech", 2020);
    // Agregar vehículos al registro
    registroAutomotor.agregarVehiculo("Auto", auto);
    registroAutomotor.agregarVehiculo("Moto", moto);
    registroAutomotor.agregarVehiculo("Camion", camion);
    // Mostrar los vehículos registrados
    console.log("Auto registrado:", registroAutomotor.getAutos());
    console.log("Moto registrada:", registroAutomotor.getMotos());
    console.log("Camion registrado:", registroAutomotor.getCamion());
    // Modificar un vehículo
    var nuevoAuto = new vehiculo_1.vehiculo("Auto", "Fiat", "206", 2007);
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
console.log(main());
