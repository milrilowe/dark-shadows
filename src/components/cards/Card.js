class Card {
    constructor(suite, value) {
        this.suite = suite;
        this.value = value;
    }

    getSuite() {
        return this.suite;
    }

    getValue () {
        return this.value;
    }

    toString() {
        return `${this.value} ${this.suite}`
    }
}

export default Card