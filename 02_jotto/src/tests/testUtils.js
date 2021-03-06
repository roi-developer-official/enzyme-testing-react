import checkPropTypes from 'check-prop-types';

/**
 * Check the props of the component when called 
 * @param {Componet} component 
 * @param {Props} props 
 */
export const checkProp =(component, props)=>{
    const propError = checkPropTypes(component.propTypes, props, 'prop', component.name);
    expect(propError).toBeUndefined();
}

/**
 * Return node with the given data-test attribute
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * @returns {ShallowWrapper}
 */
export const findByAttr = (wrapper,val)=>{
    return wrapper.find(`[data-test='${val}']`);
}
