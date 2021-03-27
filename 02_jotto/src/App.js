
import './App.css';
import Input from './Input';
import Congrats from './Congrats';
import GuessWords from './GuessWords';
import { useEffect } from 'react';
import {getSecretWord} from './actions'
function App() {
  const success = false;
  const secretWord = 'party';

  useEffect(()=>{
    getSecretWord();
  },[]);


  return (

    <div data-test="component-app" className="App">
      <h1>Jotto</h1>
      <Congrats sucess={false} />
      <Input success={success} secretWord={secretWord}/>
      <GuessWords guessedWords={[ { guessedWord: 'train', letterMatchCount: 3 } ]} />
    </div>
  );
}

export default App;
