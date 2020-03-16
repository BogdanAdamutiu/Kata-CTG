'use strict';

const instanceOfDeck = require('./Card/factory.card');

// it ('first test', () => {
//     const DeckOne = instanceOfDeck();
//     console.log(DeckOne);
//     console.log(DeckOne.drawCard());
// });

it ('first test', () => {
    const DeckOne = instanceOfDeck(10);
    console.log(DeckOne);
    //console.log(DeckOne.drawCard());
});

const game = require('./Game/factory.game');

it ('second test', () => {
    const Game = game();
    console.log(Game);
    console.log(Game.cards[2]);
    console.log(Game.drawCard());
    console.log(Game.drawCard());
    console.log(Game.drawCard());
    console.log(Game);
    //console.log(DeckOne.drawCard());
});

