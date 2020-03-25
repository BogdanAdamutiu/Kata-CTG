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

    refillManaOfManaslots() {

        this.manaslots.forEach(manaslot => manaslot.refillManaslot());
    }

    useManaFromManaslots(amount) {
       if(this.availableMana() >= amount) {
           let i = 0;
           while (i < this.manaslots.length) {
               const amountToBeUsed = Math.min(this.manaslots[i].getAmount(), amount);
               this.manaslots[i].useMana(amountToBeUsed);
               amount -= amountToBeUsed;
               i++;
           }
        }
        else {
            console.log("You are trying to use more mana than available");
            throw new Error("You are trying to use more mana than available");
        }
    }

    availableMana() {
        let mana = 0;

        for(let i = 0; i < this.manaslots.length; i++) {
            mana += this.manaslots[i].amount;
        }

        return mana;
    }

}

module.exports = Manaslots;