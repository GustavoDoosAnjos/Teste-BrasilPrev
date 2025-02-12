import { Propriedade } from './Propriedade';

type TipoJogador = 'impulsivo' | 'exigente' | 'cauteloso' | 'aleatório';

export class Jogador {
  name: string;
  saldo: number;
  tipoJogador: TipoJogador;
  propriedades: Propriedade[];
  posicao: number;

  constructor(name: string, tipoJogador: TipoJogador) {
    this.name = name;
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
      case 'aleatório':
        return Math.random() > 0.5;
      default:
        return false;
    }
  }
}
