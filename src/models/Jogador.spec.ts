import { Jogador } from '../models/Jogador';
import { Propriedade } from '../models/Propriedade';

describe('Jogador', () => {
  test('Jogador impulsivo compra qualquer propriedade', () => {
    const jogador = new Jogador('Impulsivo', 'impulsivo');
    const propriedade = new Propriedade(100, 20);

    expect(jogador.comprarPropriedade(propriedade)).toBe(true);
  });

  test('Jogador exigente compra apenas propriedades com aluguel maior que 50', () => {
    const jogador = new Jogador('Exigente', 'exigente');
    const propriedade1 = new Propriedade(100, 60);
    const propriedade2 = new Propriedade(100, 40);

    expect(jogador.comprarPropriedade(propriedade1)).toBe(true);
    expect(jogador.comprarPropriedade(propriedade2)).toBe(false);
  });

  test('Jogador cauteloso compra apenas propriedades que deixem pelo menos 80 de saldo', () => {
    const jogador = new Jogador('Exigente', 'exigente');
    jogador.saldo = 180;
    const propriedade1 = new Propriedade(100, 60);
    const propriedade2 = new Propriedade(110, 40);

    expect(jogador.comprarPropriedade(propriedade1)).toBe(true);
    expect(jogador.comprarPropriedade(propriedade2)).toBe(false);
  });

  test('Jogador não possui saldo para comprar propriedade', () => {
    const jogador = new Jogador('Exigente', 'exigente');
    jogador.saldo = 80;
    const propriedade = new Propriedade(100, 60);

    expect(jogador.comprarPropriedade(propriedade)).toBe(false);
  });
});
