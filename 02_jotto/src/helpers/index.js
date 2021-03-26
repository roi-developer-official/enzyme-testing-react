

/**
 * @method getLetterMatchCount
 * @param {string} guessWord 
 * @param {string} secretWord 
 * @return {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessWord, secretWord){
    const secretLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessWord);

    return secretLetters.filter(letter=> guessedLetterSet.has(letter)).length;
}