'use strict';

const Manaslot = require('./manaslot');

module.exports = (size, amount) => {
    if (size === undefined || isNaN(size) || amount === undefined || isNaN(amount)) {
        console.log("Arguments value for manaslot must be of type Number");
        throw new TypeError("Arguments value for manaslot must be of type Number");
    }

    return new Manaslot(size, amount);
};