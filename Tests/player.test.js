'use strict';

describe('Component Player', () => {

    it('Player requires health of type health', () => {
        const health = require('../Health/factory.health')(10);
        const instanceOfPlayer = require('../Player/factory.player')(health);
        expect(instanceOfPlayer.getHealth()).toStrictEqual(10);
    });

    it('An error is thrown if Players health is not of type health', () => {
        const instanceOfPlayer = require('../Player/factory.player')(10);
        expect(() => instanceOfPlayer.getHealth()).toThrow(TypeError("this.health.getHealth is not a function"));
    });

    it('Player health will be 9 when player sustains 1 damage', () => {
        const health = require('../Health/factory.health')(10);
        const instanceOfPlayer = require('../Player/factory.player')(health);
        instanceOfPlayer.sustainDamage(1);
        expect(instanceOfPlayer.getHealth()).toStrictEqual(9);
    });

});