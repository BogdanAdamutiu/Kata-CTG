'use strict';

describe('Kata game card', () => {

it('Kata card game 1', () => {
    const kataCardGame = require('../KataGame/factory.kataGame');
    const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const kataGameHealth = 30;
    const kataGameMaxManaslots = 10;
    const myKataGame = kataCardGame(kataGameHealth, kataGameMaxManaslots, kataGameCards);

    myKataGame.setupGame();

    myKataGame.startGame();
});

it('Kata card game 2', () => {
    const kataCardGame = require('../KataGame/factory.kataGame');
    const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const kataGameHealth = 30;
    const kataGameMaxManaslots = 10;
    const myKataGame = kataCardGame(kataGameHealth, kataGameMaxManaslots, kataGameCards);

    myKataGame.setupGame();

    myKataGame.startGame();
});

it('Kata card game 3', () => {
    const kataCardGame = require('../KataGame/factory.kataGame');
    const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const kataGameHealth = 30;
    const kataGameMaxManaslots = 10;
    const myKataGame = kataCardGame(kataGameHealth, kataGameMaxManaslots, kataGameCards);

    myKataGame.setupGame();

    myKataGame.startGame();
});

it('Kata card game 4', () => {
    const kataCardGame = require('../KataGame/factory.kataGame');
    const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const kataGameHealth = 30;
    const kataGameMaxManaslots = 10;
    const myKataGame = kataCardGame(kataGameHealth, kataGameMaxManaslots, kataGameCards);

    myKataGame.setupGame();

    myKataGame.startGame();
});

it('Kata card game 5', () => {
    const kataCardGame = require('../KataGame/factory.kataGame');
    const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const kataGameHealth = 30;
    const kataGameMaxManaslots = 10;
    const myKataGame = kataCardGame(kataGameHealth, kataGameMaxManaslots, kataGameCards);

    myKataGame.setupGame();

    myKataGame.startGame();
});

});
