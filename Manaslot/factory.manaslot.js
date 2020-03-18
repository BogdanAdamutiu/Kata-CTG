'use strict';

const Manaslot = require('./manaslot');

module.exports = (size, amount) => {
    //TODO: Throw error for incorrect type for parameters

    return new Manaslot(size, amount);
};
