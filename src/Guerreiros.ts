import Personagem, { Atalanta } from "./Personagens";
import Tribo, { Pilai } from "./Tribos";
import TipoEnergia from "./Energia";
import Classe, { ClasseSimples } from "./Classes ";
import { gerarNumero, gerarPontosDeVida } from "./gerarNumero";

export default class Guerreiro implements Classe {
  private _tribo: Tribo;
  private _personagem: Personagem;
  private _pontosDeVida: number;
  private _força: number;
  private _defesa: number;
  private _energia: TipoEnergia;

  constructor(name: string) {
    this._tribo = new Pilai('Pilai')
    this._personagem = new Atalanta(name);
    this._pontosDeVida = gerarPontosDeVida();
    this._força = gerarNumero(2, 10);
    this._defesa = gerarNumero(1, 20);
    this._energia = {
      tipo_: this._personagem.tipoEnergia,
      custo: gerarNumero(2,20)
    }
  }

  get tribo() { return this._tribo };
  get personagem() { return this._personagem };
  get pontosDeVida():number { return this._pontosDeVida };
  get força(): number { return this._força };
  get defesa(): number { return this._defesa };
  get energia(): TipoEnergia { return this._energia}

  private _vidaPerdida(dano: number) {
    return this._pontosDeVida -= dano
  }

  private _danoCondicional(dano: number) {
    if((this._pontosDeVida - dano) > 0) return this._vidaPerdida(dano);
    this._pontosDeVida = -1
  }

  danoRecebido(ataque: number): number {
    this._danoCondicional(ataque);
    return this._pontosDeVida;
  } 

  atacar(inimigo: ClasseSimples): void {
    this._danoCondicional(this._força);
  }

  private _incrementaEnergia() {
    this._energia.custo += 10;
  }

  private _incrementaForça(valor: number) {
    this._força += valor
  }

  private _incrementaDefesa(valor: number) {
    this._defesa += valor
  }

  levelUp(): void {
    this._incrementaForça(gerarNumero(2,15));
    this._incrementaDefesa(gerarNumero(2,15));
    this._incrementaEnergia();    
  }

  especial(inimigo: Classe): void {
    const danoEspecial = this._força * 4;
    inimigo.danoRecebido(danoEspecial);
  }
}