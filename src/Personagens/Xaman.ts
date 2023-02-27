import Personagem from "./Personagem";
import { Energia } from "../Energia";

export default class Xaman extends Personagem {
  static numeroDeInstancias = 0;
  private _tipoEnergia: Energia;

  constructor(_name: string) {
    super(_name);
    Xaman.incrementaInstacia();
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