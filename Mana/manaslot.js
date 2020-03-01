'use strict';

class Mana {

    constructor() {
        this.manaslot = [];
    }

    getManaslots() {
        return this.manaslot;
    }

    addManaslot() {
        if (this.manaslot.length < 10) {
            this.manaslot.push(1);
        }
    }

    getMana() {
        let availableMana = 0;
        for (let i = 0; i < this.manaslot.length; i++) {
            if(this.manaslot[i] === 1) {
                availableMana++;
            }
        }
        return availableMana;
    }

    useMana(amount) {
        if (this.manaslot.length < amount) {
            throw new Error("There is not enough mana");
        }
        try {
            if (amount <= getMana()) {
                for (let i = 0; i < amount; i++) {
                    this.manaslot[i] = 0;
                }
                //use play card method
            }
            else {
                throw new Error("There is not enough mana");
            }
        }
        catch (exception) {
            throw new Error("There is not enough mana");
        }
    }

    refillMana() {
        this.manaslot.map(x => 1);
    }
}


