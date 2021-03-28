import axios from "axios";
//jest mock module
export const getSecretWord = () => {
  return axios.get("http://localhost:3030").then((res) => res.data);
};

//redux action
export const actionTypes = {
  CORRECT_GUESS: "CURRECT_GUESS",
};

/**
 * @function currectGuess
 * @returns {object} - Action object with type 'CURRECT_GUESS'
 */

export function currectGuess() {
  return { 
      type: actionTypes.CORRECT_GUESS
  };
}
