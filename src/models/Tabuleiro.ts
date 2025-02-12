import { Propriedade } from './Propriedade';

export class Tabuleiro {
  propriedades: Propriedade[];
  tamanho = 20;

  constructor() {
    this.propriedades = Array.from(
      { length: this.tamanho },
      (_, i) =>
        new Propriedade(
          Math.floor(Math.random() * 200),
          Math.floor(Math.random() * 70)
        )
    );
  }
}
