'use strict';

const instanceOfPlayer = require('./Player/factory.player');

it('Scenario: player is instantiated and has 30 health', () => {
    const player = instanceOfPlayer();
    expect(player.getHealth()).toEqual(30);
})

it('Scenario: player suffers 1 damage and has a health of 1 less than starting health', () => {
    const player = instanceOfPlayer();
    const startingHealthOfPlayer = player.getHealth();
    player.sustainDamage(1);
    expect(player.getHealth()).toStrictEqual(startingHealthOfPlayer - 1);
});

it('Scenario: player heals 1 damage and has a health of 1 more than starting health', () => {
    const player = instanceOfPlayer();
    const startingHealthOfPlayer = player.getHealth();
    player.healDamage(1);
    expect(player.getHealth()).toStrictEqual(startingHealthOfPlayer + 1);
});
