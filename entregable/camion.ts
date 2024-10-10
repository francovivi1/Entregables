import { Vehiculo } from "./vehiculo";

export class Camion extends Vehiculo {
  constructor(marca: string, modelo: string, patente: string, año: number) {
    super("Camion", marca, modelo, año);
  }
}
