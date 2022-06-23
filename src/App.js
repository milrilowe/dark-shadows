import "./App.css";
import Deck from "./components/Deck.js";
import Board from "./components/Board.js";
import Player from "./components/Player.js";
import Piece from "./components/Piece.js";
const gameBoard = require("./darkShadowsBoard.png");

function App() {
  const deck = new Deck();
  for (let i = 0; i < 20; i++) {
    deck.shuffle();
  }
  const board = new Board();
  const player1 = new Player(0, deck.draw(4), 1);

  console.log(player1.showPlayerInfo(), "here");

  // console.log(board.toString());
  console.log(deck.toString());

  return (
    <div className="App">
      <header className="App-header">
        <div className="gameBoard">
          <Piece spaceId={player1.spaceId} color={"aqua"} />
          <img alt="gameBoard" src={String(gameBoard)} />
        </div>
      </header>
    </div>
  );
}

export default App;
