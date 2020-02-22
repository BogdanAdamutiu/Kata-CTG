'use strict';

const instanceOfHealth = require('../Health/factory.health');
const Player = require('./player');

module.exports = () => new Player(instanceOfHealth());
