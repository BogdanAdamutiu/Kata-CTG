'use strict';

const Manaslots = require('./manaslots');

module.exports = (max, min = 0) => {
    // if (max === undefined || !isNaN(max)) {
    //     console.log("Argument max for manaslots must be of type Number");
    //     throw new TypeError("Argument max for manaslots must be of type Number");
    // }
    // if (min === undefined || !isNaN(min)) {
    //     console.log("Arguments min for manaslots must be of type Number");
    //     throw new TypeError("Arguments min for manaslots must be of type Number");
    // }

    return new Manaslots(max, min);
};