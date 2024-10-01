"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegristroAutomotor = void 0;
var RegristroAutomotor = /** @class */ (function () {
    function RegristroAutomotor(listaDeAutos, ListaDeMotos, ListaDeCamiones) {
        this.auto = [];
        this.moto = [];
        this.camion = [];
        if (listaDeAutos != undefined) {
            this.auto = listaDeAutos;
        }
        else {
            this.auto = [];
        }
        if (ListaDeMotos != undefined) {
            this.moto = ListaDeMotos;
        }
        else {
            this.moto = [];
            if (ListaDeCamiones != undefined) {
                this.camion = ListaDeCamiones;
            }
            else {
                this.camion = [];
            }
        }
    }
    RegristroAutomotor.prototype.getAutos = function () {
        return this.auto;
    };
    RegristroAutomotor.prototype.getMotos = function () {
        return this.moto;
    };
    RegristroAutomotor.prototype.getCamion = function () {
        return this.camion;
    };
    RegristroAutomotor.prototype.setAutos = function (nuevoAuto) {
        this.auto = nuevoAuto;
    };
    RegristroAutomotor.prototype.setMotos = function (nuevoMoto) {
        this.moto = nuevoMoto;
    };
    RegristroAutomotor.prototype.setCamiones = function (nuevoCamion) {
        this.camion = nuevoCamion;
    };
    RegristroAutomotor.prototype.agregarVehiculo = function (tipo, vehiculo) {
        if (tipo === "auto") {
            this.auto.push(vehiculo);
        }
        else if (tipo === "moto") {
            this.moto.push(vehiculo);
        }
        else if (tipo === "camion") {
            this.camion.push(vehiculo);
        }
        else {
            return "ese tipo de vehiculo no esta disponible.";
        }
    };
    RegristroAutomotor.prototype.modificarVehiculo = function (tipo, vehiculo, nuevoVehiculo) {
        if (tipo === "auto") {
            var index = this.auto.indexOf(vehiculo);
            if (index !== -1) {
                this.auto[index] = nuevoVehiculo;
            }
        }
        else if (tipo === "moto") {
            var index = this.moto.indexOf(vehiculo);
            if (index !== -1) {
                this.moto[index] = nuevoVehiculo;
            }
        }
        else if (tipo === "camion") {
            var index = this.camion.indexOf(vehiculo);
            if (index !== -1) {
                this.camion[index] = nuevoVehiculo;
            }
            else {
                return "ese tipo de vehiculo no esta disponible";
            }
        }
    };
    RegristroAutomotor.prototype.darBaja = function (tipo, vehiculo) {
        if (tipo === "Auto") {
            this.auto = this.auto.filter(function (auto) { return auto !== vehiculo; });
        }
        else if (tipo === "Moto") {
            this.moto = this.moto.filter(function (moto) { return moto !== vehiculo; });
        }
        else if (tipo === "Camion") {
            this.camion = this.camion.filter(function (camion) { return camion !== vehiculo; });
        }
        else {
            return "No es posible dar de baja este tipo de vehículo.";
        }
    };
    return RegristroAutomotor;
}());
exports.RegristroAutomotor = RegristroAutomotor;
