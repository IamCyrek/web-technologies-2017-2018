import React from 'react';

import AditionalUserInfoComponent  from '../../components/AdditionalUserInfoComponent';
import TabsComponent from '../../components/TabsComponent'
import { shallow, mount, configure } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('AdditionalUserInfo component test', () => {
    const mockStore = configureStore([ thunk ]);
    const initialState = {
        reducerUser: {
            email: 'logoped583st@mail.ru',
            location: 'Brest',
            blog: 'logoped583st',
            company : 'EPAM'
        }
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('AdditionalUserInfo component rendered succesfully', () => {
        
        const reducerUser = mount(<AditionalUserInfoComponent store={store} />);
        expect(mountToJson(reducerUser)).toMatchSnapshot();
    });

    it('AdditionalUserInfo props match store', () => {
        const reducerUser = shallow(<AditionalUserInfoComponent store={store}/>);
        expect(reducerUser.prop('email')).toBe('logoped583st@mail.ru');
        expect(reducerUser.prop('location')).toBe('Brest');
        expect(reducerUser.prop('blog')).toBe('logoped583st');
        expect(reducerUser.prop('company')).toBe('EPAM');

    })
});