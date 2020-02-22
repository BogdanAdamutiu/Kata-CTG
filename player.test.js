'use strict';

const instanceOfPlayer = require('./Player/factory.player');

it('first test', () => {
    const playerOne = instanceOfPlayer();
    expect(playerOne.getHealth()).toEqual(30);
})