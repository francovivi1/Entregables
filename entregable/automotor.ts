import { log } from "console";
import { Vehiculo } from "./vehiculo.js";

export class RegistroAutomotor {
  private autos: Vehiculo[];
  private motos: Vehiculo[];
  private camiones: Vehiculo[];

  constructor(
    listaDeAutos: Vehiculo[],
    listaDeMotos: Vehiculo[],
    listaDeCamiones: Vehiculo[]
  ) {
    this.autos = listaDeAutos ?? [];
    this.motos = listaDeMotos ?? [];
    this.camiones = listaDeCamiones ?? [];
  }

  getAutos(): Vehiculo[] {
    return this.autos;
  }

  getMotos(): Vehiculo[] {
    return this.motos;
  }

  getCamiones(): Vehiculo[] {
    return this.camiones;
  }

  setAutos(nuevosAutos: Vehiculo[]): void {
    this.autos = nuevosAutos;
  }

  setMotos(nuevasMotos: Vehiculo[]): void {
    this.motos = nuevasMotos;
  }

  setCamiones(nuevosCamiones: Vehiculo[]): void {
    this.camiones = nuevosCamiones;
  }

  agregarVehiculo(tipo: string, vehiculo: Vehiculo) {
    if (tipo === "auto") {
      this.autos.push(vehiculo);
    } else if (tipo === "moto") {
      this.motos.push(vehiculo);
    } else if (tipo === "camion") {
      this.camiones.push(vehiculo);
    } else {
      return "Ese tipo de vehículo no está disponible.";
    }
  }

  modificarVehiculo(tipo: string, vehiculo: Vehiculo, nuevoVehiculo: Vehiculo) {
    let lista: Vehiculo[];
    if (tipo === "auto") {
      lista = this.autos;
    } else if (tipo === "moto") {
      lista = this.motos;
    } else if (tipo === "camion") {
      lista = this.camiones;
    } else {
      return "Ese tipo de vehículo no está disponible.";
    }

    const index = lista.indexOf(vehiculo);
    if (index !== -1) {
      lista[index] = nuevoVehiculo;
    }
  }

  darBaja(tipo: string, vehiculo: Vehiculo) {
    if (tipo === "auto") {
      this.autos = this.autos.filter((auto) => auto !== vehiculo);
    } else if (tipo === "moto") {
      this.motos = this.motos.filter((moto) => moto !== vehiculo);
    } else if (tipo === "camion") {
      this.camiones = this.camiones.filter((camion) => camion !== vehiculo);
    } else {
      return "No es posible dar de baja este tipo de vehículo.";
    }
  }
}
