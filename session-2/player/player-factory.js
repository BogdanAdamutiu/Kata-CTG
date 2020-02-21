'use strict';

const createInstanceOfHealth = require('../health/health-factory');
const Player = require('./player');
module.exports = () => new Player(createInstanceOfHealth());