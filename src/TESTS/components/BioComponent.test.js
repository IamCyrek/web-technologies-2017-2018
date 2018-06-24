import React from 'react';
import BioComponent from '../../components/BioComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('BioComponent component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        reducerUser: 
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" +
            "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"+
             "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "+
             "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"+
             " sunt in culpa qui officia deserunt mollit anim id est laborum. "
        
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('BioComponent component rendered succesfully', () => {
        const bioComponent = mount(
            <BioComponent store={store} />
        );
        expect(mountToJson(bioComponent)).toMatchSnapshot();
    });

    it('BioComponent component props match state', () => {
        const bioComponent = shallow(
            <BioComponent store={store} />
        );
        expect(bioComponent.prop('bio')).toBe(initialState.reducerUser.bio);
    })
});