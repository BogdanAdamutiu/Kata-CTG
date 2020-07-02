'use strict';

describe('Component Manaslot', () => {

    it('Size of manaslot requires a value to be created', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot()).toThrow(TypeError('Argument size of manaslot must be of type Number'));
    });

    it('Size of manaslot needs a value of type number not string', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot('ten')).toThrow(TypeError('Argument size of manaslot must be of type Number'));
    });

    it('Size of manaslot needs a value of type number not object', () => {
        var value = new Object();
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot(value)).toThrow(TypeError('Argument size of manaslot must be of type Number'));
    });

    it('Size of manaslot needs a value of type number not date', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot(Date)).toThrow(TypeError('Argument size of manaslot must be of type Number'));
    });

    it('Size of manaslot needs a value of type number not array', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot([1])).toThrow(TypeError('Argument size of manaslot must be of type Number'));
    });

    it('Amount of manaslot requires a value to be created', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot(1)).toThrow(TypeError('Argument amount of manaslot must be of type Number'));
    });

    it('Amount of manaslot needs a value of type number not string', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot(10,'ten')).toThrow(TypeError('Argument amount of manaslot must be of type Number'));
    });

    it('Amount of manaslot needs a value of type number not object', () => {
        var value = new Object();
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot(10, value)).toThrow(TypeError('Argument amount of manaslot must be of type Number'));
    });

    it('Amount of manaslot needs a value of type number not date', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot(10, Date)).toThrow(TypeError('Argument amount of manaslot must be of type Number'));
    });

    it('Amount of manaslot needs a value of type number not array', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        expect(() => instanceOfManaslot(10, [1])).toThrow(TypeError('Argument amount of manaslot must be of type Number'));
    });

    it('Size of manaslot will be 10 when created with 10', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot')(10,5);
        expect(instanceOfManaslot.getSize()).toStrictEqual(10);
    });

    it('Amount of manaslot will be 5 when created with 5', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot')(10,5);
        expect(instanceOfManaslot.getAmount()).toStrictEqual(5);
    });

    it('Amount of manaslot will be 10 when manaslot is refilled, because size is 10 when created', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot')(10,5);
        instanceOfManaslot.refillManaslot();
        expect(instanceOfManaslot.getAmount()).toStrictEqual(10);
    });

    it('Amount of manaslot will be 4 when 1 mana is used', () => {
        const instanceOfManaslot = require('../Manaslot/factory.manaslot')(10,5);
        instanceOfManaslot.useMana(1);
        expect(instanceOfManaslot.getAmount()).toStrictEqual(4);
    });

});