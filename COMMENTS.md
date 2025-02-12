## Pré-requisitos
    Node.js caso queira rodar o projeto localmente ou Docker caso queira rodar o projeto em um container.
    Git caso não queira baixar o projeto como zip.

## Rodando localmente com npm
    clone o projeto:
        git clone https://github.com/GustavoDoosAnjos/Teste-BrasilPrev.git
        cd Teste-BrasilPrev
    instale as dependências:
        npm install
    execute no terminal:
        npm run start:dev
        acesse a API em http://localhost:3000/jogo/simular

## Rodando com Docker compose 
    clone o projeto:
        git clone https://github.com/GustavoDoosAnjos/Teste-BrasilPrev.git
        cd Teste-BrasilPrev
    execute no terminal:
        docker compose up -d
        acesse a API em http://localhost:3000/jogo/simular

# Documentação:
    Esse projeto é uma simulação de um jogo inspirado em Banco Imobiliário, 
    onde 4 jogadores competem até ter apenas um vencedor. 

## Como funciona:
### app.ts
    Ponto de entrada da aplicação, configura o servidor express e define o endpoint /jogo/simular.
### models:
Classes que representam os elementos do jogo;
#### Jogador
    Define a classe jogador. Cada jogador possui um tipo de comportamento que define a maneira de comprar propriedades.
#### Propriedade
    Define a classe propriedade. Cada propriedade tem um preço, um valor de aluguel e um dono(nulo no começo do jogo).
#### Tabuleiro
    Define a classe tabuleiro. O tabuleiro possui 20 casas com propriedades geradas aleatoriamente.
#### Jogo
    Define a classe jogo, que gerencia a lógica do jogo, incluindo turnos, rodadas e verificação de quem ganhou.
### utils:
        Funções de utilidade, no momento só existe a de rolar o dado.
