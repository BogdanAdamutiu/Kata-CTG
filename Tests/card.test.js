'use strict';

describe('Component Card', () => {

    it('Card needs a value in order to be created', () => {
        const instanceOfCard = require('../Card/factory.card');
        expect(() => instanceOfCard()).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('Card needs a value of type number not string', () => {
        const instanceOfCard = require('../Card/factory.card');
        expect(() => instanceOfCard('ten')).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('Card needs a value of type number not object', () => {
        const instanceOfCard = require('../Card/factory.card');
        var value = new Object();
        expect(() => instanceOfCard(value)).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('Card needs a value of type number not date', () => {
        const instanceOfCard = require('../Card/factory.card');
        expect(() => instanceOfCard(Date)).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('Card needs a value of type number not array', () => {
        const instanceOfCard = require('../Card/factory.card');
        expect(() => instanceOfCard([2])).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('Card value will equal with number provided at creation', () => {
        const instanceOfCard = require('../Card/factory.card');
        const value = 10;
        const myCard = instanceOfCard(value);
        expect(myCard.value).toStrictEqual(value);
    });

    it('Card value can be any number', () => {
        const instanceOfCard = require('../Card/factory.card');
        const value = 1234567890987654321;
        const myCard = instanceOfCard(value);
        expect(myCard.value).toStrictEqual(value);
    });

    it('Card value can be 0', () => {
        const instanceOfCard = require('../Card/factory.card');
        const value = 0;
        const myCard = instanceOfCard(value);
        expect(myCard.value).toStrictEqual(value);
    });

    it('Card value can be negative', () => {
        const instanceOfCard = require('../Card/factory.card');
        const value = -10;
        const myCard = instanceOfCard(value);
        expect(myCard.value).toStrictEqual(value);
    });

    it('Card has an ID', () => {
        const instanceOfCard = require('../Card/factory.card');
        const myCard = instanceOfCard(11);
        expect(myCard.getId()).not.toBeNull();
    });

    it('Card ID can\'t be set', () => {
        const instanceOfCard = require('../Card/factory.card');
        const myCard = instanceOfCard(11, -4);
        expect(myCard.getId()).not.toEqual(-4);
    });

});