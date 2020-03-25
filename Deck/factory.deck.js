'use strict';

const Deck = require('./deck');
const Card = require('../Card/factory.card');

module.exports = cards => {
    if (cards === null || cards === undefined || !(cards instanceof Array)) {
        console.log("Argument cards for deck must be of type Array");
        throw new TypeError("Argument cards for deck must be of type Array");
    }

    const setOfCards = cards.map(x => Card(x));
    return new Deck(setOfCards);
};