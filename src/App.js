import './App.css';
import Deck from './components/Deck.js'
import Board from './components/Board.js'

function App() {
  const deck = new Deck();
  const board = new Board();
  
  return (
    <div className="App">
      <header className="App-header">
        Yo
      </header>
      
    </div>
  );
}

export default App;
