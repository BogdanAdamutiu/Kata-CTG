'use strict';

const PlayableCards = require('./playableCards');

module.exports = cards => {
    if (cards === null || cards === undefined || !Array.isArray(cards)) {
        console.log("Argument cards for playable cards must be of type Array");
        throw new TypeError("Argument cards for playable cards must be of type Array");
    }
    return new PlayableCards(cards);
};