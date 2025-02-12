import express from 'express';
import { Jogo } from './models/Jogo';

const app = express();

app.get('/jogo/simular', (req, res) => {
  try {
    const jogo = new Jogo();
    const resultado = jogo.jogar();
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao simular o jogo' });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
