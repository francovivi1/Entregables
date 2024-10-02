"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehiculo_js_1 = require("./vehiculo.js");
var automotor_js_1 = require("./automotor.js");
function main() {
    var registroAutomotor = new automotor_js_1.RegistroAutomotor([], [], []);
    // Crear vehículos
    var auto = new vehiculo_js_1.Vehiculo("Auto", "Jeep", "Renegade", 2023);
    var auto2 = new vehiculo_js_1.Vehiculo("Auto", "Fiat", "Palio", 2017);
    var moto = new vehiculo_js_1.Vehiculo("Moto", "Kawasaki", "Vulcan", 2021);
    var moto2 = new vehiculo_js_1.Vehiculo("Moto", "Yamaha", "MT-09", 2022);
    var camion = new vehiculo_js_1.Vehiculo("Camion", " Scania", "R450", 2021);
    var camion2 = new vehiculo_js_1.Vehiculo("Camion", "Iveco", "Eurotech", 2020);
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
    var nuevoAuto = new vehiculo_js_1.Vehiculo("Auto", "Fiat", "206", 2007);
    registroAutomotor.modificarVehiculo("auto", auto, nuevoAuto);
    console.log("Auto modificado:", registroAutomotor.getAutos());
    // Dar de baja los vehículos
    registroAutomotor.darBaja("auto", nuevoAuto);
    registroAutomotor.darBaja("moto", moto);
    registroAutomotor.darBaja("camion", camion);
    // Mostrar los vehículos después de darlos de baja
    console.log("Autos que quedaron despues dado de baja despues de eliminar los otros:", registroAutomotor.getAutos());
    console.log("Motos que quedaron despues dado de baja despues de eliminar los otros:", registroAutomotor.getMotos());
    console.log("Camione que quedaron despues de eliminar los otros:", registroAutomotor.getCamiones());
}
main();
