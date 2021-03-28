import PropType from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const success = useSelector((state) => state.succes);
  return (
    <div data-test="component-input">
      <form>
        <input
          data-test="input-box"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          type="text"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
          data-test="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropType.string.isRequired,
};

export default Input;
