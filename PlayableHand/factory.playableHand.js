'use strict';

const PlayableHand = require('./playableHand');

module.exports = cards => {
    if (cards === null || cards === undefined || cards instanceof Array) {
        console.log("Argument cards for playable cards must be of type Array");
        throw new TypeError("Argument cards for playable cards  must be of type Array");
    }
    return new PlayableHand(cards);
};