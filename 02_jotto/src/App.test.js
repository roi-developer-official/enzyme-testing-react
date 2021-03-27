import { mount } from "enzyme";
import { findByAttr } from "./tests/testUtils";
import App from "./App";
import { getSecretWord as mockGetSecretWord } from './actions';

//activate global mock
jest.mock('./actions');

const setup = (props = {}) => {
  return mount(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const app = findByAttr(wrapper, "component-app");
  expect(app.length).toBe(1);
});

describe('get secret word', ()=>{

  beforeEach(()=>{
    mockGetSecretWord.mockClear()
  });


  test('getSecretWord on app mount', ()=>{
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord not run on app update',()=>{
    const wrapper = setup();
    
    //using wrapper wont trigger useEffect, 
    wrapper.setProps() // this willl update the component.
    
    mockGetSecretWord.mockClear()
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);

  })
})
