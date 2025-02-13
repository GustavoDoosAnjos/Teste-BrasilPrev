import { Jogador } from '../models/Jogador';
import { Propriedade } from '../models/Propriedade';

describe('Propriedade', () => {
  test('Jogador compra propriedade sem dono', () => {
    const jogador = new Jogador('Impulsivo', 'impulsivo');
    const propriedade = new Propriedade(100, 20);

    expect(jogador.comprarPropriedade(propriedade)).toBe(true);
  });

  test('Jogador não compra propriedade com dono', () => {
    const jogador = new Jogador('Exigente', 'exigente');
    const jogadorDois = new Jogador('Exigente', 'exigente');
    const propriedade = new Propriedade(100, 60);
    propriedade.dono = jogadorDois;

    expect(jogador.comprarPropriedade(propriedade)).toBe(false);
  });
});
