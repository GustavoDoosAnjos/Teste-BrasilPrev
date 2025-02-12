import { Jogador } from './Jogador';

export class Propriedade {
  private _preco: number;
  private _aluguel: number;
  private _dono: Jogador | null;

  constructor(preco: number, aluguel: number) {
    this._preco = preco;
    this._aluguel = aluguel;
    this._dono = null;
  }

  get preco() {
    return this._preco;
  }

  get aluguel() {
    return this._aluguel;
  }

  get dono(): Jogador | null {
    return this._dono;
  }

  set dono(jogador: Jogador | null) {
    this._dono = jogador;
  }

  isDisponivel(): boolean {
    return this._dono === null;
  }
}
