import Classe, { ClasseSimples } from "../Classes ";
import Batalha from "./Batalha";

export default class PVP extends Batalha {
  constructor(public jogador: Classe, public jogador2: Classe) {
    super(jogador);
  }

  private _luta() {
    while(this.jogador.pontosDeVida !== -1 && this.jogador2.pontosDeVida !== 1) {
      this.jogador2.atacar(this.jogador);
      this.jogador.atacar(this.jogador2);
    }
  }

  batalhando(): number {
    this._luta();
    return this.jogador.pontosDeVida === -1 ? -1 : 1;
  }
}