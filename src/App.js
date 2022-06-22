import './App.css';
import Deck from './components/Deck.js'
import Board from './components/Board.js'

function App() {
  const deck = new Deck();
  const board = new Board();

  //We need a draw pile and a discard pile
  //We need a HAND
  //these are all decks? or new object called pile

  

  return (
    <div className="App">
      <header className="App-header">
        Yo
      </header>
      
    </div>
  );
}

export default App;
