
import './App.css';
import Congrats from './Congrats';
import GuessWords from './GuessWords';
function App() {
  return (
    <div data-test="component-app" className="App">
      <h1>Jotto</h1>
      <Congrats sucess={false} />
      <GuessWords guessedWords={[ { guessedWord: 'train', letterMatchCount: 3 } ]} />
    </div>
  );
}

export default App;
