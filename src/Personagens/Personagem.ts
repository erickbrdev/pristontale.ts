import { Energia } from "../Energia";

export default abstract class Personagem {
  private _especial: number;
  private _custo: number;

  constructor(private _nome: string) {
    this._especial = 0;
    this._custo = 0
  }

  get nome() { return this._nome };
  get especial() { return this._especial };
  get cost() { return this._custo };

  static instanciaPersonagem(): number {
    throw new Error('Not implemented');
  }

  abstract get tipoEnergia(): Energia;
}