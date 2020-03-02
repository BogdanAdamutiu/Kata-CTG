'use strict';

const instanceOfDeck = require('./Deck/factory.deck');

it ('first test', () => {
    const DeckOne = instanceOfDeck();
    console.log(DeckOne);
    console.log(DeckOne.drawCard());
});

