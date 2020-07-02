'use strict';

describe('Component Deck', () => {

    it('Deck needs a value in order to be created', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        expect(() => instanceOfDeck()).toThrow(TypeError('Argument cards for deck must be of type Array'));
    });

    it('Deck needs a value of type array not string', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        expect(() => instanceOfDeck('ten')).toThrow(TypeError('Argument cards for deck must be of type Array'));
    });

    it('Deck needs a value of type array not number', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        expect(() => instanceOfDeck(11)).toThrow(TypeError('Argument cards for deck must be of type Array'));
    });

    it('Deck needs a value of type array not object', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        var value = new Object();
        expect(() => instanceOfDeck(value)).toThrow(TypeError('Argument cards for deck must be of type Array'));
    });

    it('Deck needs a value of type card not date', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        expect(() => instanceOfDeck(Date.now())).toThrow(TypeError('Argument cards for deck must be of type Array'));
    });

    it('Deck will return 2 when created with 2 cards', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        const deck = instanceOfDeck([1,2]);
        expect(deck.hasCards()).toEqual(2);
    });

    it('If deck is empty and you draw a random card it will throw an error', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        const deck = instanceOfDeck([]);
        expect(() => deck.drawRandomCard(1)).toThrow(TypeError('You tried to draw a card from an empty deck'));
    });

    it('Deck will return a random card from the deck', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        const deck = instanceOfDeck([1,2,3,4,5,6]);
        console.log(deck);
        //TODO: This test is not correct need to update to check that card exists in deck
        //const randomCard = deck.drawRandomCard();
        //console.log(randomCard);
        //var n = deck.cards.indexOf(randomCard);
        expect(deck.drawRandomCard()).not.toEqual(deck[1]);

    });

    it('Deck will return 0 when it has 0 cards', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        const deck = instanceOfDeck([]);
        expect(deck.hasCards()).toStrictEqual(0);
    });

    it('Deck will return 2 when it has 2 cards', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        const deck = instanceOfDeck([1,2]);
        expect(deck.hasCards()).toStrictEqual(2);
    });
});