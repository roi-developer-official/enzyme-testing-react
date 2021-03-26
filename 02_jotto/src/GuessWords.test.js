import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProp } from "./tests/testUtils";
import GuessWords from "./GuessWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 1,
    },
  ],
};

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setUpProps} />);
};

test("does not throw warning with expected props", () => {
  checkProp(GuessWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("render instruction to guess a word", () => {
    const instructions = findByAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords: guessedWords });
  });

  test("renders without error", () => {
    const component = findByAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders guess words section", () => {
    const guessedWordsNode = findByAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("currect number of guess words", () => {
    const guessedWordsNodes = findByAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length)
  });

});
