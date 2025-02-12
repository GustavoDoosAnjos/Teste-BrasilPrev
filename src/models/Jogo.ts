import { Jogador } from './Jogador';
import { Tabuleiro } from './Tabuleiro';
import { rolarDado } from '../utils/dado';

interface ResultadoJogo {
  vencedor: string;
  jogadores: string[];
  propriedades: (string | undefined)[];
}

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
      new Jogador('Aleatório', 'aleatorio')
    ];
    this.tabuleiro = new Tabuleiro();
    this.rodadas = 0;
  }

  jogar(): ResultadoJogo {
    while (this.jogadores.length > 1 && this.rodadas < 1000) {
      for (const jogador of this.jogadores) {
        this.turno(jogador);
        if (this.jogadores.length === 1) {
          this.eliminados.unshift(this.jogadores[0].nome);
          break;
        }
      }
      this.rodadas++;
    }

    this.jogadores.sort((a, b) => b.saldo - a.saldo);

    const ranking = this.jogadores.map((j) => j.nome).concat(this.eliminados);

    return {
      vencedor: this.jogadores[0].nome,
      jogadores: ranking,
      propriedades: this.tabuleiro.propriedades.map((p) => p.dono?.nome)
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
      this.eliminados.unshift(jogador.nome);
      return;
    }

    const resultadoDado = rolarDado();
    const ultimaPosicao = jogador.posicao;
    const novaPosicao = (ultimaPosicao + resultadoDado) % this.tabuleiro.tamanho;
    jogador.posicao = novaPosicao;
    const propriedade = this.tabuleiro.propriedades[novaPosicao];

    if (ultimaPosicao + resultadoDado >= this.tabuleiro.tamanho) {
      jogador.saldo += 100;
    }

    if (!propriedade.dono && jogador.comprarPropriedade(propriedade)) {
      jogador.saldo -= propriedade.preco;
      propriedade.dono = jogador;
      jogador.propriedades.push(propriedade);
    } else if (propriedade.dono && propriedade.dono !== jogador) {
      jogador.saldo -= propriedade.aluguel;
      propriedade.dono.saldo += propriedade.aluguel;
    }

    if (jogador.saldo < 0) {
      this.turno(jogador);
    }
  }
}
