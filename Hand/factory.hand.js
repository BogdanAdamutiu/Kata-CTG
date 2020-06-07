'use strict';

const Hand = require('./hand');
const playableHandFactory = require('../PlayableCards/factory.playableCards');

module.exports = () => new Hand(playableHandFactory);