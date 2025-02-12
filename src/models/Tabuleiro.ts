import { Propriedade } from './Propriedade';

export class Tabuleiro {
  propriedades: Propriedade[];
  tamanho = 20;

  // Como não estava especificado os preços de aluguel e compra eu deixei aleatório.

  constructor() {
    this.propriedades = Array.from(
      { length: this.tamanho },
      (_) =>
        new Propriedade(
          Math.floor(Math.random() * 200),
          Math.floor(Math.random() * 70)
        )
    );
  }
}
