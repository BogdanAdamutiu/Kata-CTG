'use strict';

const Card = require('./card');

module.exports = value => {
    if (value === undefined || !isNaN(value)) {
        console.log("Argument value for card must be of type Number");
        throw new TypeError("Argument value for card must be of type Number");
    }

    const id = Math.floor(Math.random() * 100000000000, 100000000000);
    return new Card(id, value);
};