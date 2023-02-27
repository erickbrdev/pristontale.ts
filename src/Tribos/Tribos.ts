export default abstract class Tribo {
  private _nome: string;
  
  constructor(nome: string) {
    this._nome = nome;
  }

  get nome() { return this._nome }

  static instanciaTribo(): number {
    throw new Error('Not implemented');
  }
}