'use strict';

const createInstanceOfPlayer = require('./player/player-factory');

it('scenerio: player is instantiated and has 60 health, 0 mana and 0 manaslots', () => {
  const player = createInstanceOfPlayer();
  expect(player.getHealth()).toStrictEqual(60);
  expect(player.getMana()).toStrictEqual(0);
  expect(player.getManaslots()).toStrictEqual(0);
});

it('scenerio: player suffers 1 damage and has a health of 1 less than starting health', () => {
  const player = createInstanceOfPlayer();
  const startingHealthOfPlayer = player.getHealth();
  player.sufferDamage(1);
  expect(player.getHealth()).toStrictEqual(startingHealthOfPlayer - 1); // a tad bit coupled to the implementation instead of behaviour
});

it('scenerio: player heals 1 damage and has a health of 1 more than starting health', () => {
  const player = createInstanceOfPlayer();
  const startingHealthOfPlayer = player.getHealth();
  player.healDamage(1);
  expect(player.getHealth()).toStrictEqual(startingHealthOfPlayer + 1);
});

it('scenerio: player receives 1 manaslot and has 1 more manaslots than starting manaslots', () => {
  const player = createInstanceOfPlayer();
  const startingManaslotsOfPlayer = player.getManaslots();
  player.addManaslot();
  expect(player.getManaslots()).toStrictEqual(startingManaslotsOfPlayer + 1);
});