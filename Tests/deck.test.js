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

    it('Deck will return a random card', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
        const deck = instanceOfDeck([1,2,3,4,5,6]);
        expect(deck.drawRandomCard(1)).not.toEqual(deck[1]);
    });

    it('', () => {
        const instanceOfDeck = require('../Deck/factory.deck');
    });


});