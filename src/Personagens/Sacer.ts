import Personagem from "./Personagem";
import { Energia } from "../Energia";

export default class Sacer extends Personagem {
  static numeroDeInstancias = 0;
  private _tipoEnergia: Energia;

  constructor(_name: string) {
    super(_name);
    Sacer.incrementaInstacia();
    this._tipoEnergia = 'stamina';
  }

  static incrementaInstacia() {
    return this.numeroDeInstancias += 1
  }

  get tipoEnergia(): Energia {
    return this._tipoEnergia;
  }

  static criaPersonagemInstanciado() {
    return this.numeroDeInstancias;
  }  
}