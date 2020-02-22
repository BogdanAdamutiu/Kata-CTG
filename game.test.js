'use strict';

describe('game', () => {

    it('Play game', () => {
        const game = require('./game')();
        game.start();
    });
});