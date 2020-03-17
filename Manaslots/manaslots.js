'use strict';

class Manaslots {

    constructor(max, min) {
        this.manaslots = [];
        this.minimum = min;
        this.maximum = max;
    }

    addManaslot(manaslot) {
        if(this.manaslots.length <= this.maximum) {
            this.manaslots.push(manaslot);
        }
        else {
            console.log('Maximum manaslots reached');
        }
    }

    refillManaslots() {
        this.manaslots.map(manaslot => manaslot.amount = manaslot.size);
    }

    useManaslots(amount) {
        for(let i = 0; i < this.manaslots.length; i++) {
            if((this.manaslots[i].amount > 0) && (amount > 0)) {
                if(amount < this.manaslots[i].amount) {
                    this.manaslots[i].amount -= amount;
                    amount -= this.manaslots[i].amount;
                }
                else {
                    amount -= this.manaslots[i].amount;
                    this.manaslots[i].amount = 0;
                }
            }
        }
    }

    availableMana() {
        let mana = 0;

        for(let i = 0; i < this.manaslots.length; i++) {
            if (this.manaslots[i].amount > 0) {
                mana += this.manaslots[i].amount;
            }
        }

        return mana;
    }

}

module.exports = Manaslots;