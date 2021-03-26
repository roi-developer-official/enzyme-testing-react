import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProp } from "./tests/testUtils";
import Input from "./Input";

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

test("dont throw error when prop is currect", () => {
  checkProp(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(()=>{
    React.useState = originalUseState;
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });


  test("field is clrear upon submit", () => {
    const submitButton = findByAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault: ()=>{}});
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });

});

