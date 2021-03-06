import React, {Component} from "react"

import { SUITES, VALUES } from "./cards/Cards.js";

import Card from "./cards/Card.js";

/**
 * 52 cards of 4 suits
 */
class Deck extends Component {
  constructor(props) {
    super(props)
    this.deck = [];
    const suits = SUITES.map((suit) => {
      const values = VALUES.map((value) => {
        const card = new Card({suit, value});
        this.deck.push(card);
      });
    });
  }

  /**
   * Fisher-Yates algorithm for shuffling an array
   */
  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
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

    /**
     * Returns cards drawn
     */
    draw(numToDraw) {
        let cards = [];
        for (let i = 0; i < numToDraw; i++) {
            cards.push(this.deck.pop());
        }
        return cards;
    }

    /**
     * Returns length
     */
    getLength() {
        return this.deck.length;
    }

    render() {
        return
    }

}

export default Deck;
