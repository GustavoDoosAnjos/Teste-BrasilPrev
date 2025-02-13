import { Jogo } from '../models/Jogo';

describe('Jogo', () => {
  test('Jogador é eliminado ao ficar com saldo negativo', () => {
    const jogo = new Jogo();
    const jogador = jogo.jogadores[0];

    jogador.saldo = -10;
    jogo.turno(jogador);

    expect(jogo.jogadores.includes(jogador)).toBe(false);
  });
});
