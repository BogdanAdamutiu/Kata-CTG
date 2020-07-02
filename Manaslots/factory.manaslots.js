'use strict';

const Manaslots = require('./manaslots');

module.exports = (max, min = 0) => {
    if (max === undefined || isNaN(max) || typeof(max) != "number") {
        console.log("Argument max of manaslots must be of type Number");
        throw new TypeError("Argument max of manaslots must be of type Number");
    }
    if (min === undefined || isNaN(min) || typeof(min) != "number") {
        console.log("Argument min of manaslots must be of type Number");
        throw new TypeError("Argument min of manaslots must be of type Number");
    }

    return new Manaslots(max, min);
};