'use strict';

const kataGame = require('./Game/factory.game');
const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
const kataGameHealth = 30;
const kataGameMaxManaslots = 10;

const myKataGame = kataGame(player1, player2, kataGameHealth, kataGameCards, kataGameMaxManaslots);

myKataGame.startGame();

do {
    myKataGame.takeTurn()
} while (!myKataGame.endGame());
