import React from 'react';

import SearchComponent  from '../../components/SearchComponent';

import { shallow, mount, configure } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('AdditionalUserInfo component test', () => {
    const mockStore = configureStore([ thunk ]);
    const initialState = {
        
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('Search component rendered succesfully', () => {
        
        const reducerUser = mount(<SearchComponent store={store} />);
        expect(mountToJson(reducerUser)).toMatchSnapshot();

        
    });
    it('Search component rendered succesfully', () => {
        
   

        const mockLogout = jest.fn();
        const wrapper = mount(<SearchComponent startLogout={mockLogout}  store={store}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        wrapper.find('input').at(0).simulate('change')
        wrapper.find('input').at(1).simulate('change')

        });


});