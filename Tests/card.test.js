'use strict';

describe('Card', () => {

    it('needs a value in order to be created', () => {
        const instanceOfCard = require('../Card/factory.card');
        expect(() => instanceOfCard()).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('needs a value of type number not string', () => {
        const instanceOfCard = require('../Card/factory.card');
        expect(() => instanceOfCard('ten')).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('needs a value of type number not object', () => {
        const instanceOfCard = require('../Card/factory.card');
        var value = new Object();
        expect(() => instanceOfCard(value)).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('needs a value of type number not date', () => {
        const instanceOfCard = require('../Card/factory.card');
        expect(() => instanceOfCard(Date)).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('needs a value of type number not array', () => {
        const instanceOfCard = require('../Card/factory.card');
        expect(() => instanceOfCard([2])).toThrow(TypeError('Argument value for card must be of type Number'));
    });

    it('will value equal with number provided at creation', () => {
        const instanceOfCard = require('../Card/factory.card');
        const value = 10;
        const myCard = instanceOfCard(value);
        expect(myCard.value).toStrictEqual(value);
    });

    it('value can be 0', () => {
        const instanceOfCard = require('../Card/factory.card');
        const value = 0;
        const myCard = instanceOfCard(value);
        expect(myCard.value).toStrictEqual(value);
    });

    it('value can be negative', () => {
        const instanceOfCard = require('../Card/factory.card');
        const value = -10;
        const myCard = instanceOfCard(value);
        expect(myCard.value).toStrictEqual(value);
    });

    it('value can be any number', () => {
        const instanceOfCard = require('../Card/factory.card');
        const value = 1234567890987654321;
        const myCard = instanceOfCard(value);
        expect(myCard.value).toStrictEqual(value);
    });
});