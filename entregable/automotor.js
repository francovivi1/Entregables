"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaDeAutos, listaDeMotos, listaDeCamiones) {
        this.autos = listaDeAutos !== null && listaDeAutos !== void 0 ? listaDeAutos : [];
        this.motos = listaDeMotos !== null && listaDeMotos !== void 0 ? listaDeMotos : [];
        this.camiones = listaDeCamiones !== null && listaDeCamiones !== void 0 ? listaDeCamiones : [];
    }
    RegistroAutomotor.prototype.getAutos = function () {
        return this.autos;
    };
    RegistroAutomotor.prototype.getMotos = function () {
        return this.motos;
    };
    RegistroAutomotor.prototype.getCamiones = function () {
        return this.camiones;
    };
    RegistroAutomotor.prototype.setAutos = function (nuevosAutos) {
        this.autos = nuevosAutos;
    };
    RegistroAutomotor.prototype.setMotos = function (nuevasMotos) {
        this.motos = nuevasMotos;
    };
    RegistroAutomotor.prototype.setCamiones = function (nuevosCamiones) {
        this.camiones = nuevosCamiones;
    };
    RegistroAutomotor.prototype.agregarVehiculo = function (tipo, vehiculo) {
        if (tipo === "auto") {
            this.autos.push(vehiculo);
        }
        else if (tipo === "moto") {
            this.motos.push(vehiculo);
        }
        else if (tipo === "camion") {
            this.camiones.push(vehiculo);
        }
        else {
            return "Ese tipo de vehículo no está disponible.";
        }
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (tipo, vehiculo, nuevoVehiculo) {
        var lista;
        if (tipo === "auto") {
            lista = this.autos;
        }
        else if (tipo === "moto") {
            lista = this.motos;
        }
        else if (tipo === "camion") {
            lista = this.camiones;
        }
        else {
            return "Ese tipo de vehículo no está disponible.";
        }
        var index = lista.indexOf(vehiculo);
        if (index !== -1) {
            lista[index] = nuevoVehiculo;
        }
    };
    RegistroAutomotor.prototype.darBaja = function (tipo, vehiculo) {
        if (tipo === "auto") {
            this.autos = this.autos.filter(function (auto) { return auto !== vehiculo; });
        }
        else if (tipo === "moto") {
            this.motos = this.motos.filter(function (moto) { return moto !== vehiculo; });
        }
        else if (tipo === "camion") {
            this.camiones = this.camiones.filter(function (camion) { return camion !== vehiculo; });
        }
        else {
            return "No es posible dar de baja este tipo de vehículo.";
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
