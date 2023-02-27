import Classe, { ClasseSimples } from "./Classes ";

export default class Monstro implements ClasseSimples {
  protected _pontosDeVida: number;
  private _força: number;

  constructor() {
    this._pontosDeVida = 75;
    this._força = 50;
  }

  get pontosDeVida() { return this._pontosDeVida };
  get força() { return this._força }

  private _vidaPerdida(dano: number) {
    return this._pontosDeVida -= dano
  }

  private _danoCondicional(dano: number) {
    if((this._pontosDeVida - dano) > 0) return this._vidaPerdida(dano);
    this._pontosDeVida = -1
  }
  
  atacar(inimigo: Classe): void {
    this._danoCondicional(this._força);
  }

  danoRecebido(ataque: number): number {
    this._danoCondicional(ataque);
    return this._pontosDeVida;
  }  
}