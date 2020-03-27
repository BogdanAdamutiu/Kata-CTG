'use strict';

const instanceOfDeck = require('./Card/factory.card');


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

it('Deck', () => {
    const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const Deck = require('./Deck/factory.deck');
    const deck = Deck(kataGameCards);

    console.log(deck);
    console.log(deck.drawRandomCard());
    console.log(deck.hasCards());
});

it('Hand', () => {
    const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const Deck = require('./Deck/factory.deck');
    const Hand = require('./Hand/factory.hand');
    const deck = Deck(kataGameCards);
    Hand().addToHand(deck.drawRandomCard());
    // Hand().addToHand(deck.cards[3]);
    // Hand().addToHand(deck.cards[6]);
    console.log(deck.drawRandomCard());
    console.log(deck.cards[6]);
    console.log(deck.cards[8].value);
    Hand().addToHand(deck.cards[6]);


    console.log(Hand());

    console.log(deck.cards.splice(Math.floor(Math.random()*deck.cards.length), 1));

});

it('Health', () => {
    const viata = require('./Health/factory.health');
    const altaviata = viata(5);

    console.log(altaviata);

});


it('Kata game', () => {
    const kataGame = require('./Game/factory.game');
    const kataGameCards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const kataGameHealth = 30;
    const kataGameMaxManaslots = 10;

    const myKataGame = kataGame(kataGameHealth, kataGameMaxManaslots, kataGameCards);

    console.log(myKataGame.activePlayer);

    myKataGame.setupGame();

    myKataGame.startGame();
});
