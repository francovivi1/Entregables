import { vehiculo } from "./vehiculo";

export class RegristroAutomotor {
  private auto: vehiculo[];
  private moto: vehiculo[];
  private camion: vehiculo[];

  constructor(
    listaDeAutos: vehiculo[],
    ListaDeMotos: vehiculo[],
    ListaDeCamiones: vehiculo[]
  ) {
    if (listaDeAutos != undefined) {
      this.auto = listaDeAutos;
    } else {
      this.auto = [];
    }

    if (ListaDeMotos != undefined) {
      this.moto = ListaDeMotos;
    } else {
      this.moto = [];

      if (ListaDeCamiones != undefined) {
        this.camion = ListaDeCamiones;
      } else {
        this.camion = [];
      }
    }
  }

  getAutos(): vehiculo[] {
    return this.auto;
  }

  getMotos(): vehiculo[] {
    return this.moto;
  }

  getCamion(): vehiculo[] {
    return this.camion;
  }

  setAutos(nuevoAuto: vehiculo[]): void {
    this.auto = nuevoAuto;
  }

  setMotos(nuevoMoto: vehiculo[]): void {
    this.moto = nuevoMoto;
  }

  setCamiones(nuevoCamion: vehiculo[]): void {
    this.camion = nuevoCamion;
  }

  agregarVehiculo(tipo: string, vehiculo: vehiculo) {
    if (tipo === "auto") {
      this.auto.push(vehiculo);
    } else if (tipo === "moto") {
      this.moto.push(vehiculo);
    } else if (tipo === "camion") {
      this.camion.push(vehiculo);
    } else {
      return "ese tipo de vehiculo no esta disponible.";
    }
  }

  modificarVehiculo(tipo: string, vehiculo: vehiculo, nuevoVehiculo: vehiculo) {
    if (tipo === "auto") {
      const index = this.auto.indexOf(vehiculo);
      if (index !== -1) {
        this.auto[index] = nuevoVehiculo;
      }
    } else if (tipo === "moto") {
      const index = this.moto.indexOf(vehiculo);
      if (index !== -1) {
        this.moto[index] = nuevoVehiculo;
      }
    } else if (tipo === "camion") {
      const index = this.camion.indexOf(vehiculo);
      if (index !== -1) {
        this.camion[index] = nuevoVehiculo;
      } else {
        return "ese tipo de vehiculo no esta disponible";
      }
    }
  }

  darBaja(tipo: string, vehiculo: vehiculo) {
    if (tipo === "Auto") {
      this.auto = this.auto.filter((auto) => auto !== vehiculo);
    } else if (tipo === "Moto") {
      this.moto = this.moto.filter((moto) => moto !== vehiculo);
    } else if (tipo === "Camion") {
      this.camion = this.camion.filter((camion) => camion !== vehiculo);
    } else {
      return "No es posible dar de baja este tipo de vehículo.";
    }
  }
}
