'use strict';

const Manaslots = require('./manaslots');

module.exports = (max, min = 0) => new Manaslots(max, min);