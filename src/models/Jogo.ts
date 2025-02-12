import { Jogador } from './Jogador';
import { Tabuleiro } from './Tabuleiro';
import { rolarDado } from '../utils/dado';

export class Jogo {
  jogadores: Jogador[];
  eliminados: string[] = [];
  tabuleiro: Tabuleiro;
  rodadas: number;

  constructor() {
    this.jogadores = [
      new Jogador('Impulsivo', 'impulsivo'),
      new Jogador('Exigente', 'exigente'),
      new Jogador('Cauteloso', 'cauteloso'),
      new Jogador('Aleatório', 'aleatório')
    ];
    this.tabuleiro = new Tabuleiro();
    this.rodadas = 0;
  }

  jogar(): {
    winner: string;
    jogadores: string[];
    propriedades: (string | undefined)[];
  } {
    while (this.jogadores.length > 1 && this.rodadas < 1000) {
      for (const jogador of this.jogadores) {
        this.turno(jogador);
        if (this.jogadores.length === 1) {
          this.eliminados.unshift(this.jogadores[0].name);
          break;
        }
      }
      this.rodadas++;
    }

    this.jogadores.sort((a, b) => b.saldo - a.saldo);

    const ranking = this.jogadores.map((j) => j.name).concat(this.eliminados);

    return {
      winner: this.jogadores[0].name,
      jogadores: ranking,
      propriedades: this.tabuleiro.propriedades.map((p) => p.dono?.name)
    };
  }

  turno(jogador: Jogador): void {
    if (jogador.saldo < 0) {
      this.tabuleiro.propriedades.map((p) => {
        if (p.dono === jogador) {
          p.dono = null;
        }
      });

      this.jogadores = this.jogadores.filter((j) => j !== jogador);
      this.eliminados.unshift(jogador.name);
      return;
    }

    const resultadoDado = rolarDado();
    const ultimaPosicao = jogador.posicao;
    const novaPosicao = (ultimaPosicao + resultadoDado) % this.tabuleiro.tamanho;
    jogador.posicao = novaPosicao;
    const property = this.tabuleiro.propriedades[novaPosicao];

    if (ultimaPosicao + resultadoDado >= this.tabuleiro.tamanho) {
      jogador.saldo += 100;
    }

    if (!property.dono && jogador.comprarPropriedade(property)) {
      jogador.saldo -= property.preco;
      property.dono = jogador;
      jogador.propriedades.push(property);
    } else if (property.dono && property.dono !== jogador) {
      jogador.saldo -= property.aluguel;
      property.dono.saldo += property.aluguel;
    }

    if (jogador.saldo < 0) {
      this.turno(jogador);
    }
  }
}
