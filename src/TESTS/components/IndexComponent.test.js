import React from 'react';
import IndexComponent from '../../components/IndexComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('Index component test', () => {
    const mockStore = configureStore([thunk]);
    
    it('Index component rendered succesfully', () => {
        const indexComponent = shallow(<IndexComponent />);
        expect(shallowToJson(indexComponent)).toMatchSnapshot();
    });

   
});