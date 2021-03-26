import PropType from 'prop-types';
import React from 'react';

function Input({ secretWord, success }){
    const [currentGuess, setCurrentGuess] = React.useState("");
    return (
        <div data-test="component-input">
            <form>
                <input 
                data-test="input-box" 
                placeholder="enter guess"
                value={currentGuess}
                onChange={(e)=>setCurrentGuess(e.target.value)}
                type="text"/>
            <button 
            onClick={(e)=>{
                e.preventDefault();
                setCurrentGuess("")
            }}
            data-test="submit-button">
                Submit</button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropType.string.isRequired
}

export default Input;