"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    //FUNCION CONSTRUCTORA
    function Vehiculo(marca, modelo, patente, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.año = año;
    }
    //METODOS
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.año;
    };
    Vehiculo.prototype.setMarca = function (nuevoMarca) {
        this.marca = nuevoMarca;
    };
    Vehiculo.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Vehiculo.prototype.setPatente = function (nuevoPatente) {
        this.patente = nuevoPatente;
    };
    Vehiculo.prototype.setAnio = function (nuevoAnio) {
        this.año = nuevoAnio;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
