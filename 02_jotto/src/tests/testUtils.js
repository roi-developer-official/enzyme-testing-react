import checkPropTypes from 'check-prop-types';

export const checkProp =(component, props)=>{
    const propError = checkPropTypes(component.prototype, props, 'prop', component.name);
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
