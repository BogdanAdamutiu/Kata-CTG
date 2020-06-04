'use strict';

const kataGame = require('./Game/factory.game');
// const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
// const kataGameHealth = 30;
// const kataGameMaxManaslots = 10;

const myKataGame = kataGame(kataGameHealth, kataGameCards, kataGameMaxManaslots);

myKataGame.setupGame();

myKataGame.startGame();



// if (value === null || value === undefined || typeof(value) != "number") {
//     console.log("Argument value for card must be of type Number");
//     throw new TypeError("Argument value for card must be of type Number");
// }