export default interface ClasseSimples {
  pontosDeVida: number;
  força: number;
  atacar(inimigo: ClasseSimples): void;
  danoRecebido(ataque: number): void;
} 