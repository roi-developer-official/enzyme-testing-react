import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { middlewares } from "../configureStore";

/**
 * create testing store with inported reducers, middleware and initial state
 * @function storeFactory
 * @param {reducer} rootReducer
 * @param {object} initialState
 * @param {applyMiddleware} applyMiddleware
 * @returns {Store} - redux store
 * 
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
};

/**
 * Check the props of the component when called
 * @param {Componet} component
 * @param {Props} props
 */
export const checkProp = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

/**
 * Return node with the given data-test attribute
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
