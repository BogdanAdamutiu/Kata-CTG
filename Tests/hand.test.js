'use strict';

describe('Component Hand', () => {

    it('Hand can be empty', () => {
        const instanceOfHand = require('../Hand/factory.hand')();
        expect(instanceOfHand.cards.length).toStrictEqual(0);
    });

    it('A card can be added to the hand', () => {
        const instanceOfHand = require('../Hand/factory.hand')();
        const card = require('../Card/factory.card')(5);
        instanceOfHand.addToHand(card);
        expect(instanceOfHand.cards.length).toStrictEqual(1);
    });

    it('Hand will have 3 cards when 3 cards are added to it', () => {
        const instanceOfHand = require('../Hand/factory.hand')();
        const card = require('../Card/factory.card');
        const card1 = card(1);
        const card2 = card(2);
        const card3 = card(3);
        instanceOfHand.addToHand(card1);
        instanceOfHand.addToHand(card2);
        instanceOfHand.addToHand(card3);
        expect(instanceOfHand.cards.length).toStrictEqual(3);
    });

    it('An error appears if you try to remove and un-existing card from the hand', () => {
        const instanceOfHand = require('../Hand/factory.hand')();
        const card = require('../Card/factory.card')(5);
        expect(() => instanceOfHand.removeCard(card)).toThrowError("You tried to remove an un-existent card from your hand");
    });

    it('A card can be removed from the hand if it exists', () => {
        const instanceOfHand = require('../Hand/factory.hand')();
        const card = require('../Card/factory.card')(5);
        instanceOfHand.addToHand(card);
        instanceOfHand.removeCard(card);
        expect(instanceOfHand.cards.length).toStrictEqual(0);
    });

    it('A hand has an available hand', () => {
        const instanceOfHand = require('../Hand/factory.hand')();
        const card = require('../Card/factory.card');
        const card1 = card(1);
        const card2 = card(2);
        const card3 = card(3);
        instanceOfHand.addToHand(card1);
        instanceOfHand.addToHand(card2);
        instanceOfHand.addToHand(card3);
        var availableHand = instanceOfHand.availableHand(2);
        expect(availableHand.hasPlayableCards()).toBeTruthy();
        //TODO: find a better way to write this tests and add more tests for this method
    });

});