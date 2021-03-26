import React from 'react';
import PropTypes from 'prop-types';

function GuessWords(props){
    let content;
    if(props.guessedWords.length === 0){
        content = (
            <span data-test="guess-instructions">
                Try to guess the word!
            </span>
        )
    }
    
    return (
        <div data-test="component-guessed-words">
            {content}
        </div>
    )
}

GuessWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWords: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessWords;