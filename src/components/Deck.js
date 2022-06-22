import {
    SUITES,
    VALUES,
} from './cards/Cards.js'

import Card from './cards/Card.js'

/**
 * 52 cards of 4 suites
 */
class Deck {
    constructor() {
        this.deck = []
        const suites = SUITES.map(suite => {
            const values = VALUES.map(value => {
                const card = new Card(suite, value);
                this.deck.push(card)
            })
        })
    }

    /**
     * Fisher-Yates algorithm for shuffling an array
     */
    shuffle() {
        for(let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    /**
     * Returns the deck to be printed
     */
    toString() {
        return this.deck;
    }

}

export default Deck