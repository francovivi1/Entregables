export class Vehiculo {
  //ATRIBUTOS
  private marca: string;
  private modelo: string;
  private patente: string;
  private año: number;

  //FUNCION CONSTRUCTORA
  constructor(marca: string, modelo: string, patente: string, año: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.patente = patente;
    this.año = año;
  }

  //METODOS
  getMarca(): string {
    return this.marca;
  }

  getModelo(): string {
    return this.modelo;
  }

  getPatente(): string {
    return this.patente;
  }

  getAnio(): number {
    return this.año;
  }

  setMarca(nuevoMarca: string): void {
    this.marca = nuevoMarca;
  }

  setModelo(nuevoModelo: string): void {
    this.modelo = nuevoModelo;
  }

  setPatente(nuevoPatente: string): void {
    this.patente = nuevoPatente;
  }

  setAnio(nuevoAnio: number): void {
    this.año = nuevoAnio;
  }
}
