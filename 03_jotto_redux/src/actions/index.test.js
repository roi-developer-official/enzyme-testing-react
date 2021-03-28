import moxios from "moxios";
import { getSecretWord, currectGuess, actionTypes } from "./";

describe("currectGuess", () => {
  test("return an action type `CURRECT_GUESS`", () => {
    const action = currectGuess();
    expect(action).toMatchObject({ type: actionTypes.CORRECT_GUESS });
  });
});



describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("secretWord is returned", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe("party");
    });
  });
});
