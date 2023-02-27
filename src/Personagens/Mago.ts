import Personagem from "./Personagem";
import { Energia } from "../Energia";

export default class Mago extends Personagem {
  static numeroDeInstancias = 0;
  private _tipoEnergia: Energia;

  constructor(_name: string) {
    super(_name);
    Mago.incrementaInstacia();
    this._tipoEnergia = 'mana';
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