'use strict';

const Health = require('./health');

module.exports = health => {
    // if (health === undefined || !isNaN(health)) {
    //     console.log("Argument health for health must be of type Number");
    //     throw new TypeError("Argument health for health must be of type Number");
    // }
    return new Health(health);
};
