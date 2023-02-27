import Classe from "../Classes "

export default abstract class Batalha {

  constructor(protected jogador: Classe) {}

  lutar() :number {
    return this.jogador.pontosDeVida === -1 ? -1 : 1
  }
}