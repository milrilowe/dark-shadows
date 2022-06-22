import React, {Component} from "react"

class Card extends Component{
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

    render() {
        return(
            <div>

            </div>
        )
    }

}

export default Card