import App from "./App";
import Enzyme, { shallow, ShallowWrapper} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @Function
 * @returns { ShallowWrapper }
 */
const setup = () => {
  return shallow(<App />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("render without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);

});
test("render increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});


test("counter display starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking button incremenent counter display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper , "increment-button");
  button.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();

  expect(count).toBe("1");
});

test('render decrement button', ()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");

  expect(button.length).toBe(1);
});

test('decrement count on click', ()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");

  button.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("-1")
});





