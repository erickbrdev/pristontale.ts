import Tribo from "./Tribos";

export default class Pilai extends Tribo {
  static numeroDeInstancias = 0;

  constructor(name: string) {
    super(name);
    Pilai.incrementaInstacia()
  }

  static incrementaInstacia() {
    return this.numeroDeInstancias += 1
  }

  static criaTriboInstanciado() {
    return this.numeroDeInstancias;
  }  
}