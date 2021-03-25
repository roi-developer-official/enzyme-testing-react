import enzyme, {shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
enzyme.configure({ adapter: new Adapter() });

test('renders without error', ()=>{


});

test('renders no text when sucesss prop false',()=>{
    
})
test('renders congrats message when sucesss prop true',()=>{

    
})