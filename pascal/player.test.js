'use strict';

describe('player', () => {

    describe('create', () => {

        it('returns a player object with health 30, manaslots 0', () => {
            const player = require('./player')();
            expect(player).not.toBeNull();
            expect(player.health).toStrictEqual(30);
            expect(player.manaslots).toStrictEqual([]);
            expect(player.hand).toStrictEqual([10]);
        });

    });

    describe('receiveManaslot', () => {

        it('returns a single manaslot with 1 mana after player creation', () => {
            const player = require('./player')();
            const actual = player.receiveManaslot();
            expect(actual.length).toStrictEqual(1);
            expect(actual[0]).toStrictEqual(1);
        });

        it('adds no additional manaslots to the available manaslots after reaching the maximum allowed manaslots', () => {
            const player = require('./player')();

            let actual = player.receiveManaslot();
            expect(actual.length).toStrictEqual(1);
            expect(actual[0]).toStrictEqual(1);

            player.useMana();
            actual = player.receiveManaslot();
            expect(actual.length).toStrictEqual(2);
            expect(actual[0]).toStrictEqual(0);
            expect(actual[1]).toStrictEqual(1);

            player.useMana();
            actual = player.receiveManaslot();
            expect(actual.length).toStrictEqual(3);
            expect(actual[0]).toStrictEqual(0);
            expect(actual[1]).toStrictEqual(0);
            expect(actual[2]).toStrictEqual(1);

            player.useMana();
            actual = player.receiveManaslot();
            expect(actual.length).toStrictEqual(3);
            expect(actual[0]).toStrictEqual(0);
            expect(actual[1]).toStrictEqual(0);
            expect(actual[2]).toStrictEqual(0);

        });

    });

    describe('receiveMana', () => {

        it('returns false if there are 0 manaslots available', () => {
            const player = require('./player')();
            const actual = player.receiveMana();
            expect(actual).toBeFalsy();
        });

        it('returns false if there are no manaslots with mana available', () => {
            const player = require('./player')();
            player.receiveManaslot();
            const actual = player.receiveMana();
            expect(actual).toBeFalsy();
        });

        it('returns false if there is an empty manaslot available', () => {
            const player = require('./player')();
            player.receiveManaslot();
            player.useMana();

            const actual = player.receiveMana();
            expect(actual).toBeTruthy();
        });

    });

    describe('useMana', () => {

        it('returns false when manaslots ran out of mana', () => {
            const player = require('./player')();
            expect(player.useMana()).toBeFalsy();
        });

        it('returns true when manaslots has mana', () => {
            const player = require('./player')();
            player.receiveManaslot();
            expect(player.useMana()).toBeTruthy();
        });

    });

    describe('receiveDamage', () => {

        it('returns 30 health after player creation and player is dealt 0 damage', () => {
            const player = require('./player')();
            expect(player.receiveDamage(0)).toStrictEqual(30);
        });

        it('returns 20 health after player creation and player is dealt 10 damage', () => {
            const player = require('./player')();
            expect(player.receiveDamage(10)).toStrictEqual(20);
        });

        it('returns false after player creation and player is dealt -10 damage', () => {
            const player = require('./player')();
            expect(player.receiveDamage(-10)).toBeFalsy();
        });

    });

    describe('receiveHealing', () => {

        it('returns 30 health after player creation and healing 0 health', () => {
            const player = require('./player')();
            expect(player.receiveHealing(0)).toStrictEqual(30);
        });

        it('returns 40 health after player creation and player healing 10 health', () => {
            const player = require('./player')();
            expect(player.receiveHealing(10)).toStrictEqual(40);
        });

        it('returns false after player creation and player healing -10 health', () => {
            const player = require('./player')();
            expect(player.receiveHealing(-10)).toBeFalsy();
        });

    });

    describe('drawCard', () => {

        it('returns true if player has cards in his deck', () => {
            const player = require('./player')();
            expect(player.drawCard()).toBeTruthy();
        });

        it('returns true if player runs out of cards in his deck', () => {
            const player = require('./player')();
            player.drawCard();
            player.drawCard();
            player.drawCard();

            expect(player.drawCard()).toBeFalsy();
        });

    });

    describe('playCard', () => {

        it('returns false if player has no manaslots available', () => {
            const player = require('./player')();
            expect(player.playCard()).toBeFalsy();
        });

        it('returns false if player has manaslots but no mana', () => {
            const player = require('./player')();
            player.receiveManaslot();
            player.useMana();

            expect(player.playCard()).toBeFalsy();
        });

        it('returns false if player has no cards left in his hand', () => {
            const opponent = { receiveDamage: () => 1 };

            const player = require('./player')();
            player.receiveManaslot();
            player.receiveMana();
            player.playCard(opponent);

            player.receiveManaslot();
            player.receiveMana();

            expect(player.playCard()).toBeFalsy();
        });

        it('returns card with any value if player has manaslots and has mana available', () => {
            const opponent = { receiveDamage: () => 1 };

            const player = require('./player')();
            player.receiveManaslot();
            player.receiveMana();

            expect(player.playCard(opponent)).toBeTruthy();
        });

    });

});