import { Propriedade } from './Propriedade';

type TipoJogador = 'impulsivo' | 'exigente' | 'cauteloso' | 'aleatorio';

export class Jogador {
  nome: string;
  saldo: number;
  tipoJogador: TipoJogador;
  propriedades: Propriedade[];
  posicao: number;

  constructor(nome: string, tipoJogador: TipoJogador) {
    this.nome = nome;
    this.tipoJogador = tipoJogador;
    this.saldo = 300;
    this.posicao = 0;
    this.propriedades = [];
  }

  comprarPropriedade(propriedade: Propriedade) {
    if (propriedade.dono || this.saldo < propriedade.preco) return false;

    switch (this.tipoJogador) {
      case 'impulsivo':
        return true;
      case 'exigente':
        return propriedade.aluguel > 50;
      case 'cauteloso':
        return this.saldo - propriedade.preco >= 80;
      case 'aleatorio':
        return Math.random() > 0.5;
      default:
        return false;
    }
  }
}
