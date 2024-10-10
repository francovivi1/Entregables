import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo {
  constructor(marca: string, modelo: string, patente: string, año: number) {
    super("Auto", marca, modelo, año);
  }
}
