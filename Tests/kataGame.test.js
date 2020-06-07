'use strict';

it('Kata card game', () => {
    const kataCardGame = require('../KataGame/factory.kataGame');
    const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const kataGameHealth = 30;
    const kataGameMaxManaslots = 10;
    const myKataGame = kataCardGame(kataGameHealth, kataGameMaxManaslots, kataGameCards);

    myKataGame.setupGame();

    myKataGame.startGame();
});
