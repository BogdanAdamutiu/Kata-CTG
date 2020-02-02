class Player {

    constructor(health, mana, manaSlots, cards) {
        this.health = health;
        this.mana = mana;
        this.manaSlots = manaSlots;
        this.cards = cards;
    }

    get Health() {
        return this.health;
    }

    set Health(newHealth) {
        this.health = newHealth;
    }

    get Mana() {
        return this.mana;
    }

    set Mana(newMana) {
        this.mana = newMana;
    }

    get ManaSlots() {
        return this.manaSlots;
    }

    set ManaSlots(newManaSlots) {
        this.manaSlots = newManaSlots;
    }

    get Cards() {
        return this.cards;
    }

    set Cards(newCards) {
        this.cards = newCards;
    }
}

module.exports = () => new Player();

