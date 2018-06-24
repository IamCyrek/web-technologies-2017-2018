import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import IndexComponent from '../components/IndexComponent';

configure({ adapter: new Adapter() });

describe('Userpage component test', () => {
    it('Userpage component rendered succesfully', () => {
        const userFollowers = shallow(
                <IndexComponent />
        );
        expect(shallowToJson(userFollowers)).toMatchSnapshot();
    });
});