import enzyme, { shallow } from "enzyme";
import { findByAttr } from "./tests/testUtils";
import App from "./App";

const setup = (props = {}) => {
  return shallow(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const app = findByAttr(wrapper, "component-app");
  expect(app.length).toBe(1);
});

