'use strict';

const cardsValue = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];

const EU = require('../Deck/factory.deck');

module.exports = () => EU(cardsValue);

