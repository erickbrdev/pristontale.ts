import Classe, { ClasseSimples } from "../Classes ";
import Batalha from "./Batalha";

export default class PVE extends Batalha {
  
  constructor(public jogador: Classe, public inimigo: ClasseSimples[] | Classe[]) {
    super(jogador);
  }

  private _batalha(inimigo: ClasseSimples | Classe) {
    while(this.jogador.pontosDeVida !== -1 && inimigo.pontosDeVida !==1) {
      this.jogador.atacar(inimigo);
      inimigo.atacar(this.jogador);
    }
  }

  private _batalhaReal() {
    for(let i = 0; i < this.inimigo.length; i++) {
      this._batalha(this.inimigo[i]);
    }
  }

  lutar(): number {
    this._batalhaReal();
    return this.jogador.pontosDeVida === -1 ? -1 : 1;
  }
}