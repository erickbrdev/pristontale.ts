export type Energia = "mana" | "stamina";

export default interface TipoEnergia {
  tipo_: Energia;
  custo: number;
}