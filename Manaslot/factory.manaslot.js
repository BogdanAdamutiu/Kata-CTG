'use strict';

const Manaslot = require('./manaslot');

module.exports = (size, amount) => {
    return new Manaslot(size, amount);
};
