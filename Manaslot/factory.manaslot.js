'use strict';

const Manaslot = require('./manaslot');

module.exports = (size, amount) => {
    if (size === undefined || isNaN(size) || typeof(size) != "number") {
        console.log("Argument size of manaslot must be of type Number");
        throw new TypeError("Argument size of manaslot must be of type Number");
    }
    if (amount === undefined || isNaN(amount) || typeof(amount) != "number") {
        console.log("Argument amount of manaslot must be of type Number");
        throw new TypeError("Argument amount of manaslot must be of type Number");
    }

    return new Manaslot(size, amount);
};