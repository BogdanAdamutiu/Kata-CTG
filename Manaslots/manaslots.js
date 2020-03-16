'use strict';

class Manaslots {

    constructor(min, max) {
        this.manaslots = [];
        this.minimum = min;
        this.maximum = max;
    }

    addManaslot(manaslot) {
        if(this.manaslots.length <= this.maximum) {
            this.manaslots.push(manaslot);
        }

        console.log('Maximum manaslots reached');
    }

    refillManaslot() {
        this.manaslots.map(manaslot => manaslot.amount = manaslot.size);
    }

}

module.exports = Manaslots;