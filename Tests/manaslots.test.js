'use strict';

describe('Component Manaslots', () => {

    it('Max of manaslots requires a value to be created', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots');
        expect(() => instanceOfManaslots()).toThrow(TypeError('Argument max of manaslots must be of type Number'));
    });

    it('Max of manaslots needs a value of type number not string', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots');
        expect(() => instanceOfManaslots('ten')).toThrow(TypeError('Argument max of manaslots must be of type Number'));
    });

    it('Max of manaslots needs a value of type number not object', () => {
        var value = new Object();
        const instanceOfManaslots = require('../Manaslots/factory.manaslots');
        expect(() => instanceOfManaslots(value)).toThrow(TypeError('Argument max of manaslots must be of type Number'));
    });

    it('Max of manaslots needs a value of type number not date', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots');
        expect(() => instanceOfManaslots(Date)).toThrow(TypeError('Argument max of manaslots must be of type Number'));
    });

    it('Max of manaslots needs a value of type number not array', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots');
        expect(() => instanceOfManaslots([1])).toThrow(TypeError('Argument max of manaslots must be of type Number'));
    });

    it('Min of manaslot will be 0 if no value is provided', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots')(1);
        expect(instanceOfManaslots.minimum).toStrictEqual(0);
    });

    it('Min of manaslot needs a value of type number not string', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots');
        expect(() => instanceOfManaslots(10,'ten')).toThrow(TypeError('Argument min of manaslots must be of type Number'));
    });

    it('Min of manaslot needs a value of type number not object', () => {
        var value = new Object();
        const instanceOfManaslots = require('../Manaslots/factory.manaslots');
        expect(() => instanceOfManaslots(10, value)).toThrow(TypeError('Argument min of manaslots must be of type Number'));
    });

    it('Min of manaslot needs a value of type number not date', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots');
        expect(() => instanceOfManaslots(10, Date)).toThrow(TypeError('Argument min of manaslots must be of type Number'));
    });

    it('Min of manaslot needs a value of type number not array', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots');
        expect(() => instanceOfManaslots(3, [5])).toThrow(TypeError('Argument min of manaslots must be of type Number'));
    });

    it('Max of manaslot will be 10 when created with 10', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots')(10);
        expect(instanceOfManaslots.maximum).toStrictEqual(10);
    });

    it('Min of manaslot will be 5 when created with 5', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots')(10,5);
        expect(instanceOfManaslots.minimum).toStrictEqual(5);
    });

    it('A manaslot can be added', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots')(2);
        const instanceOfManaslot = require('../Manaslot/factory.manaslot')(4,5);
        instanceOfManaslots.addManaslot(instanceOfManaslot);
        expect(instanceOfManaslots.manaslots.length).toStrictEqual(1);
    });

    it('Can\'t add more manaslots than max', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots')(2);
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        const manaslot1 = instanceOfManaslot(4,5);
        const manaslot2 = instanceOfManaslot(3,6);
        const manaslot3 = instanceOfManaslot(2,7);
        instanceOfManaslots.addManaslot(manaslot1);
        instanceOfManaslots.addManaslot(manaslot2);
        instanceOfManaslots.addManaslot(manaslot3);
        expect(instanceOfManaslots.manaslots.length).toStrictEqual(2);
    });

    it('All manaslots can be refilled', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots')(3);
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        const manaslot1 = instanceOfManaslot(4,5);
        const manaslot2 = instanceOfManaslot(3,6);
        const manaslot3 = instanceOfManaslot(2,7);
        instanceOfManaslots.addManaslot(manaslot1);
        instanceOfManaslots.addManaslot(manaslot2);
        instanceOfManaslots.addManaslot(manaslot3);
        instanceOfManaslots.refillManaOfManaslots();
        expect(manaslot1.getAmount()).toStrictEqual(4);
        expect(manaslot2.getAmount()).toStrictEqual(3);
        expect(manaslot3.getAmount()).toStrictEqual(2);
    });

    it('Available mana will be the sum of all manaslots amounts which is 18', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots')(3);
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        const manaslot1 = instanceOfManaslot(4,5);
        const manaslot2 = instanceOfManaslot(3,6);
        const manaslot3 = instanceOfManaslot(2,7);
        instanceOfManaslots.addManaslot(manaslot1);
        instanceOfManaslots.addManaslot(manaslot2);
        instanceOfManaslots.addManaslot(manaslot3);
        expect(instanceOfManaslots.availableMana()).toStrictEqual(18);
    });

    it('Available mana will be 10 after using 8 mana', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots')(3);
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        const manaslot1 = instanceOfManaslot(4,5);
        const manaslot2 = instanceOfManaslot(3,6);
        const manaslot3 = instanceOfManaslot(2,7);
        instanceOfManaslots.addManaslot(manaslot1);
        instanceOfManaslots.addManaslot(manaslot2);
        instanceOfManaslots.addManaslot(manaslot3);
        instanceOfManaslots.useManaFromManaslots(8);
        expect(instanceOfManaslots.availableMana()).toStrictEqual(10);
    });

    it('An error will be thrown if more mana than available is used', () => {
        const instanceOfManaslots = require('../Manaslots/factory.manaslots')(3);
        const instanceOfManaslot = require('../Manaslot/factory.manaslot');
        const manaslot1 = instanceOfManaslot(4,5);
        const manaslot2 = instanceOfManaslot(3,6);
        const manaslot3 = instanceOfManaslot(2,7);
        instanceOfManaslots.addManaslot(manaslot1);
        instanceOfManaslots.addManaslot(manaslot2);
        instanceOfManaslots.addManaslot(manaslot3);
        expect(() => instanceOfManaslots.useManaFromManaslots(20)).toThrowError("You are trying to use more mana than available");
    });

});