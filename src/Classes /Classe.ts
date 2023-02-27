import TipoEnergia from "../Energia";
import ClasseSimples from "./ClasseSimples";

export default interface Classe extends ClasseSimples {
  defesa: number;
  energia?: TipoEnergia;
  especial(inimigo: Classe): void;
  levelUp(): void;
}