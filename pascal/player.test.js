'use strict';

describe('player', () => {

    describe('create', () => {

        it('returns a player object with health 30, manaslots 0', () => {
            const player = require('./player')();
            expect(player).not.toBeNull();
            expect(player.health).toStrictEqual(30);
            expect(player.manaslots).toStrictEqual([]);
            expect(player.cards).toStrictEqual([0, 0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });

    });

    describe('addManaslots', () => {

        it('returns an empty array after player creation', () => {
            const player = require('./player')();
            expect(player.manaslots).toStrictEqual([]);
        });

        it('returns an single entry array with value 1 after player creation and adding a single manaslot', () => {
            const player = require('./player')();
            expect(player.manaslots).toStrictEqual([]);
            const manaslots = player.addManaslot();
            expect(player.manaslots).toStrictEqual([1]);
            expect(player.manaslots).toStrictEqual(manaslots);
        });

        it('there will be maximum 3 manaslots and will not exceed 3 even when adding additional ones', () => {
            const player = require('./player')();
            player.addManaslot();
            player.addManaslot();
            player.addManaslot();
            const actual = player.addManaslot();
            expect(actual.length).toStrictEqual(3);
        });

        it('...', () => {
            const player = require('./player')();
            let actual = player.useMana();
            expect(actual).toBeFalsy();
            player.addManaslot();
            actual = player.useMana();
            expect(actual).toBeTruthy();
        });

    });

    describe('getAmountOfManaslots', () => {

        it('returns 0 after player creation', () => {
            const player = require('./player')();
            expect(player.getAmountOfManaslots()).toStrictEqual(0);
        });

        it('returns 1 after player creation and adding a single manaslot', () => {
            const player = require('./player')();
            expect(player.getAmountOfManaslots()).toStrictEqual(0);
            player.addManaslot();
            const actual = player.getAmountOfManaslots();
            expect(actual).toStrictEqual(1);
        });

    });

});