import React from 'react';
import OrganizationsComponent from '../../components/OrganizationsComponent';
import TabsComponent from '../../components/TabsComponent'
import { shallow, mount, configure } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('Organization component test', () => {
    const mockStore = configureStore([ thunk ]);
    const initialState = {
        reducerUser: {
            login: 'logoped583st'
        },
        reducerOrgs: [
            {
                avatar_url: 'https://avatars3.githubusercontent.com/u/30079690?s=400&u=e3443b749fa4d36979e0d631192f3a7bbadc3eeb&v=4',
                login: 'logoped583st'
            }
        ]
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('MainUserInfoComponent component rendered succesfully', () => {
        
        const reducerOrgs = mount(<OrganizationsComponent store={store} />);
        expect(mountToJson(reducerOrgs)).toMatchSnapshot();
    });

    it('User props match store', () => {
        const reducerOrgs = shallow(<OrganizationsComponent store={store}/>);
        expect(reducerOrgs.prop('avatar_url')).toBe(undefined);
        expect(reducerOrgs.prop('login')).toBe(undefined);
    })
});