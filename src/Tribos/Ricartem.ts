import Tribo from "./Tribos";

export default class Ricartem extends Tribo {
  static numeroDeInstancias = 0;

  constructor(name: string) {
    super(name);
    Ricartem.incrementaInstacia()
  }

  static incrementaInstacia() {
    return this.numeroDeInstancias += 1
  }

  static criaTriboInstanciado() {
    return this.numeroDeInstancias;
  }  
}