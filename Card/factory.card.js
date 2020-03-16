'use strict';

const Card = require('./card');

module.exports = value => {
    const id = Math.floor(Math.random() * 100000000000, 100000000000);
    return new Card(id, value);
};