'use strict';

describe('Component Health', () => {

    it('Health requires a value to be created', () => {
        const instanceOfHealth = require('../Health/factory.health');
        expect(() => instanceOfHealth()).toThrow(TypeError('Argument health for health must be of type Number'));
    });

    it('Health needs a value of type number not string', () => {
        const instanceOfHealth = require('../Health/factory.health');
        expect(() => instanceOfHealth('ten')).toThrow(TypeError('Argument health for health must be of type Number'));
    });

    it('Health needs a value of type number not object', () => {
        var value = new Object();
        const instanceOfHealth = require('../Health/factory.health');
        expect(() => instanceOfHealth(value)).toThrow(TypeError('Argument health for health must be of type Number'));
    });

    it('Health needs a value of type number not date', () => {
        const instanceOfHealth = require('../Health/factory.health');
        expect(() => instanceOfHealth(Date)).toThrow(TypeError('Argument health for health must be of type Number'));
    });

    it('Health needs a value of type number not array', () => {
        const instanceOfHealth = require('../Health/factory.health');
        expect(() => instanceOfHealth([1])).toThrow(TypeError('Argument health for health must be of type Number'));
    });

    it('Health will be 10 when created with 10', () => {
        const instanceOfHealth = require('../Health/factory.health')(10);
        expect(instanceOfHealth.getHealth()).toStrictEqual(10);
    });

    it('Health will be initialized with 5 but will return 4 after loosing 1 health', () => {
        const instanceOfHealth = require('../Health/factory.health')(5);
        instanceOfHealth.looseHealth(1);
        expect(instanceOfHealth.getHealth()).toStrictEqual(4);
    });

    it('Health will be initialized with 5 but will return 6 after gaining 1 health', () => {
        const instanceOfHealth = require('../Health/factory.health')(5);
        instanceOfHealth.gainHealth(1);
        expect(instanceOfHealth.getHealth()).toStrictEqual(6);
    });

});