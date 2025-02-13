import { Tabuleiro } from '../models/Tabuleiro';

describe('Tabuleiro', () => {
  test('Tabuleiro é criado com 20 propriedades', () => {
    const tabuleiro = new Tabuleiro();
    expect(tabuleiro.propriedades.length).toBe(20);
  });

  test('Propriedades tem preço e aluguel', () => {
    const tabuleiro = new Tabuleiro();
    tabuleiro.propriedades.forEach((propriedade) => {
      expect(propriedade.preco).toBeGreaterThanOrEqual(100);
      expect(propriedade.aluguel).toBeGreaterThanOrEqual(20);
    });
  });
});
