import axios from "axios";
import { getLetterMatchCount} from '../helpers'
//jest mock module
export const getSecretWord = () => {
  return axios.get("http://localhost:3030").then((res) => res.data);
};

//redux action
export const actionTypes = {
  CORRECT_GUESS: "CURRECT_GUESS",
  GUESS_WORD: "GUESS_WORD"
};

/**
 * @function currectGuess
 * @returns {object} - Action object with type 'CURRECT_GUESS'
 */
export const currectGuess = ()=>{
  return { 
      type: actionTypes.CORRECT_GUESS,
      GUESS_WORD: actionTypes.GUESS_WORD
  };
}

/**
 * Returns Redux thunk function that dispatches GUESS_WORD action
 * and (conditionlly) CORRECT_GUESS action
 * @function guessedWord
 * @param {string} guessedWord 
 * @returns {function} Redux thunk function
 */
export const guessWord = (guessedWord)=>{
    return function(dispatch, getState){
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
        dispatch({type:actionTypes.GUESS_WORD, payload: {
            guessedWord, 
            letterMatchCount
        }});
        if(guessedWord === secretWord){
            dispatch({type: actionTypes.CORRECT_GUESS});
        }
    };
}