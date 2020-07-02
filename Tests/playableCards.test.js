'use strict';

describe('Component Playable Cards', () => {

    it('Playable Cards requires a value to be created', () => {
        const instanceOfPlayableCards = require('../PlayableCards/factory.playableCards');
        expect(() => instanceOfPlayableCards()).toThrow(TypeError('Argument cards for playable cards must be of type Array'));
    });

    it('Playable Cards needs a value of type array not string', () => {
        const instanceOfPlayableCards = require('../PlayableCards/factory.playableCards');
        expect(() => instanceOfPlayableCards('ten')).toThrow(TypeError('Argument cards for playable cards must be of type Array'));
    });

    it('Playable Cards needs a value of type array not object', () => {
        var value = new Object();
        const instanceOfPlayableCards = require('../PlayableCards/factory.playableCards');
        expect(() => instanceOfPlayableCards(value)).toThrow(TypeError('Argument cards for playable cards must be of type Array'));
    });

    it('Playable Cards needs a value of type array not date', () => {
        const instanceOfPlayableCards = require('../PlayableCards/factory.playableCards');
        expect(() => instanceOfPlayableCards(Date)).toThrow(TypeError('Argument cards for playable cards must be of type Array'));
    });

    it('Playable Cards needs a value of type array not number', () => {
        const instanceOfPlayableCards = require('../PlayableCards/factory.playableCards');
        expect(() => instanceOfPlayableCards(1)).toThrow(TypeError('Argument cards for playable cards must be of type Array'));
    });

    it('Playable Cards will return true when it has at least 1 playable card', () => {
        const instanceOfPlayableCards = require('../PlayableCards/factory.playableCards')([1,3,4]);
        expect(instanceOfPlayableCards.hasPlayableCards()).toBeTruthy();
    });

    it('Playable Cards will return false when it has no playable card', () => {
        const instanceOfPlayableCards = require('../PlayableCards/factory.playableCards')([]);
        expect(instanceOfPlayableCards.hasPlayableCards()).toBeFalsy();
    });

    it('Playable Cards with only 1 card, will be 0 after taking a card', () => {
        const instanceOfPlayableCards = require('../PlayableCards/factory.playableCards')([1]);
        instanceOfPlayableCards.takeCard();
        expect(instanceOfPlayableCards.hasPlayableCards()).toBeFalsy();
    });

    it('An error is thrown when you try to take a card from no playable cards', () => {
        const instanceOfPlayableCards = require('../PlayableCards/factory.playableCards')([]);
        expect(() => instanceOfPlayableCards.takeCard()).toThrowError("You tried to take a card from empty playable cards");
    });

});