class Cards {

    constructor(type, manaCost) {
        this.type = type;
        this.manaCost = manaCost;
    }

    get Type() {
        return this.type;
    }

    set Type(newType) {
        this.type = newType;
    }

    get ManaCost() {
        return this.manaCost;
    }

    set ManaCost(newManaCost) {
        this.manaCost = newManaCost;
    }
}

module.exports = () => new Cards();