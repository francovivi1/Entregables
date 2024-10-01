class Televisor {
  //estados o variables o atributos
  private estaPrendido: boolean;
  private volumenActual: number;
  private canalActual: number;

  //funcion constructora
  constructor(volumen: number, canal: number) {
    this.volumenActual = volumen;
    this.canalActual = canal;
  }

  //metodos
  prenderApagar(): void {
    if (this.estaPrendido) {
      this.estaPrendido = false;
    } else {
      this.estaPrendido = true;
    }
  }

  subirVolumen(): void {
    this.volumenActual = this.volumenActual + 1;
  }

  subirCanal(): void {
    this.canalActual = this.canalActual + 1;
  }
}

//instancias

let primerTelevisor = new Televisor(10, 25);

let segundoTelevisor = new Televisor(50, 20);

primerTelevisor.prenderApagar();
