'use strict';

describe('player', () => {

    describe('create', () => {

        it('returns a player object with health 30, manaslots 0', () => {
            const player = require('./playerOld')();
            expect(player).not.toBeNull();
            expect(player.health).toStrictEqual(30);
            expect(player.manaslots).toStrictEqual([]);
            expect(player.cards).toStrictEqual([0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8]);
        });

    });

    describe('addManaslots', () => {

        it('returns an empty array after player creation', () => {
            const player = require('./playerOld')();
            expect(player.manaslots).toStrictEqual([]);
        });

        it('returns an single entry array with value 1 after player creation and adding a single manaslot', () => {
            const player = require('./playerOld')();
            expect(player.manaslots).toStrictEqual([]);
            const manaslots = player.addManaslot();
            expect(player.manaslots).toStrictEqual([1]);
            expect(player.manaslots).toStrictEqual(manaslots);
        });

        it('there will be maximum 10 manaslots and will not exceed 10 even when adding additional ones', () => {
            const player = require('./playerOld')();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            const actual = player.addManaslot();
            expect(actual.length).toStrictEqual(10);
        });

    });

    describe('getAmountOfManaslots', () => {

        it('returns 0 after player creation', () => {
            const player = require('./playerOld')();
            expect(player.getAmountOfManaslots()).toStrictEqual(0);
        });

        it('returns 1 after player creation and adding a single manaslot', () => {
            const player = require('./playerOld')();
            expect(player.getAmountOfManaslots()).toStrictEqual(0);
            player.addManaslot();
            const actual = player.getAmountOfManaslots();
            expect(actual).toStrictEqual(1);
        });

    });

    describe('useMana', () => {

        it('throws error "Insufficient mana was available" if there are no mana slots with mana', () => {
            const player = require('./playerOld')();
            expect(() => player.useMana(1)).toThrowError('Insufficient mana was available');
        });

        it('returns an array with first 2 elements 0', () => {
            const player = require('./playerOld')();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            expect(player.useMana(2)).toEqual([0, 0, 1]);
        });

    });

    describe('getCardNumber', () => {

        it('returns 20 after player creation', () => {
            const player = require('./playerOld')();
            expect(player.getCardNumber()).toEqual(20);
        });

    });

    describe('refillMana', () => {

        it('returns empty if manaslot has not been added', () => {
            const player = require('./playerOld')();
            expect(player.refillMana()).toEqual([]);
        });

        it('returns 1 for each manaslot added', () => {
            const player = require('./playerOld')();
            player.addManaslot();
            player.addManaslot();
            expect(player.refillMana()).toEqual([1, 1]);
        });

        it('returns 1 for each manaslot even after usage', () => {
            const player = require('./playerOld')();
            player.addManaslot();
            player.addManaslot();
            expect(player.refillMana()).toEqual([1, 1]);
        });
    });

    describe('getHealth', () => {

        it('returns 30 when player is created', () => {
            const player = require('./playerOld')();
            expect(player.getHealth()).toEqual(30);
        });
    });

    describe('useDamageCard', () => {

        it('returns 30 when no cards is used', () => {
            const player = require('./playerOld')();
            expect(player.useDamageCard(0)).toEqual(30);
        });

        it('returns 25 when 5 damage card is used', () => {
            const player = require('./playerOld')();
            expect(player.useDamageCard(5)).toEqual(25);
        });

        it('returns -5 when 35 damage card is used', () => {
            const player = require('./playerOld')();
            expect(player.useDamageCard(35)).toEqual(-5);
        });
    });

});