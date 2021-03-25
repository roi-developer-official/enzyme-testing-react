import enzyme, { shallow } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";
import { findByAttr } from "./tests/testUtils";
enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when sucesss prop false", () => {
  const wrapper = setup({ sucess: false });
  const component = findByAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders congrats message when sucesss prop true", () => {
  const wrapper = setup({ sucess: true });
  const message = findByAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0)
});
