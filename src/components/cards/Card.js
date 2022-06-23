import React, {Component} from "react"

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