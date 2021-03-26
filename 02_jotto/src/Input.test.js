import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, checkProp } from './tests/testUtils';
import Input from './Input';

const setup = (secretWord = 'party')=>{
    return shallow(<Input secretWord={secretWord} />);
}


test('renders without error', ()=>{
    const wrapper = setup();
    const inputComponent = findByAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
});

test('dont throw error when prop is currect', ()=>{
    checkProp(Input, { secretWord : 'party' })
})