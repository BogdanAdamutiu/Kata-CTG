'use strict';

const PlayableCards = require('./playableCards');

module.exports = cards => {
    if (cards === null || cards === undefined || cards instanceof Array) {
        throw new TypeError("argument cards must be of type Array");
    }
    return new PlayableCards(cards);
};