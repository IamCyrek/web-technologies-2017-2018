import React from 'react';
import MainUserInfoComponent from '../../components/MainUserInfoComponent';
import TabsComponent from '../../components/TabsComponent'
import { shallow, mount, configure } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('MainUserInfoComponent component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        reducerUser: {
            avatar_url: 'https://avatars3.githubusercontent.com/u/30079690?s=400&u=e3443b749fa4d36979e0d631192f3a7bbadc3eeb&v=4',
            name: 'STAS',
            login: 'logoped583st'
        }
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('MainUserInfoComponent component rendered succesfully', () => {
        const editComponent = shallow(<TabsComponent />);
        expect(mountToJson(editComponent)).toMatchSnapshot();
        const reducerUser = mount(<MainUserInfoComponent store={store} />);
        expect(mountToJson(reducerUser)).toMatchSnapshot();
        editComponent.find('Tabs').simulate('select', 1);
        expect(editComponent.props().selectedIndex).toBe(1);
    });

    it('MainUserInfoComponent props match store', () => {
        const reducerUser = shallow(<MainUserInfoComponent store={store} />);
        expect(reducerUser.prop('name')).toBe('STAS');
        expect(reducerUser.prop('login')).toBe('logoped583st');
      
    })
});