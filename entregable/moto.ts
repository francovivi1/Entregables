import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo {
  constructor(marca: string, modelo: string, patente: string, año: number) {
    super("Moto", marca, modelo, año);
  }
}
