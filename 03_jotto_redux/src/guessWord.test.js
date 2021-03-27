import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByAttr } from "./tests/testUtils";

const setup = (state = {}) => {
  const wrapper = mount(<App />);

  const inputBox = findByAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  const submitButton = findByAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault: () => {} });

  return wrapper;
};

describe("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });

  test.skip("creates a guessWords table with one row", () => {
    const guessedWordsRows = findByAttr(wrapper, "guess-word");
    expect(guessedWordsRows).toHaveLength(1);
  });

});
