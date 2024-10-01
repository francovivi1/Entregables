"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculo = void 0;
var vehiculo = /** @class */ (function () {
    //FUNCION CONSTRUCTORA
    function vehiculo(marca, modelo, patente, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.año = año;
    }
    //METODOS
    vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    vehiculo.prototype.getAnio = function () {
        return this.año;
    };
    vehiculo.prototype.setMarca = function (nuevoMarca) {
        this.marca = nuevoMarca;
    };
    vehiculo.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    vehiculo.prototype.setPatente = function (nuevoPatente) {
        this.patente = nuevoPatente;
    };
    vehiculo.prototype.setAnio = function (nuevoAnio) {
        this.año = nuevoAnio;
    };
    return vehiculo;
}());
exports.vehiculo = vehiculo;
