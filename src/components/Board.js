import {SPACES} from './spaces/Spaces.js'
import Space from './spaces/Space.js'

class Board {
    constructor() {
        this.board = []
        const spaces = SPACES.map(s => {
            const space = new Space(s.id, s.coord, s.value, s.next);
            this.board.push(space);
        })
    }

    toString() {
        return this.board;
    }
}


export default Board