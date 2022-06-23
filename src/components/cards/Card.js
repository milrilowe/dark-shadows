import React, {Component} from "react"

/**
 * Suit Value pair - not a standard deck of cards
 * Suits: Bat, Spider, Goblet, Dagger
 * Values: Barnabas, Vampire, Single, Double
 */
class Card extends Component{
    constructor(props) {
        super(props);
        this.suit = props.suit;
        this.value = props.value;
    }

    getSuite() {
        return this.suit;
    }

    getValue () {
        return this.value;
    }

    toString() {
        return `${this.value} ${this.suit}`
    }

    render() {
        return(
            <div>

            </div>
        )
    }

}

export default Card