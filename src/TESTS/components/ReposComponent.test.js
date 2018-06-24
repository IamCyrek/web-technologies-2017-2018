import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { HashRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import RepositoriesComponent from '../../components/RepositoriesComponent';

configure({ adapter: new Adapter() });

describe('UserRepositories component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        reducerUser: {
            login: 'logoped583st'
        },
        reducerRepos: [
            {
                name: 'adgfds',
                html_url: 'http://KAAAAKAA/',
                language: 'C#',
                private: true,
            },
            {
                name: 'logos',
                html_url: 'http://KAAAAKAA/',
                language: 'Java',
                private: false,
            },
        
        ]
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('UserRepositories component rendered succesfully', () => {
        const userRepositories = mount(
            <HashRouter>
                <RepositoriesComponent store={store} />
            </HashRouter>
        );
        expect(mountToJson(userRepositories)).toMatchSnapshot();
    });

    it('Switch filter', () => {
        const userRepositories = mount(
            <HashRouter>
                <RepositoriesComponent store={store} />
            </HashRouter>
        );
        expect(userRepositories.find(".Type").props().value).toBe('All_repos');
        expect(userRepositories.find(".Language").props().value).toBe('All_Language');
        userRepositories.find(".Type").simulate('change', { target: { value: 'private' } });
        userRepositories.find(".Language").simulate('change', { target: { value: 'C#' } });
        expect(userRepositories.find(".Type").props().value).toBe('private');
        expect(userRepositories.find(".Language").props().value).toBe('C#');
        userRepositories.find(".Type").simulate('change', { target: { value: 'public' } });
        expect(userRepositories.find(".Type").props().value).toBe('public');
        userRepositories.find(".Language").simulate('change', { target: { value: 'All_Language' } });
        expect(userRepositories.find(".Language").props().value).toBe('All_Language');
        userRepositories.find(".Type").simulate('change', { target: { value: 'All_repos' } });
        expect(userRepositories.find(".Type").props().value).toBe('All_repos');
        expect(userRepositories.find(".Language").props().value).toBe('All_Language');
    });

    it('UserRepositories rendered without user login', () => {
        const fakeInitialState = {
            reducerUser: {
                login: ''
            },
            reducerRepos: [
                {
                    name: 'asdasd',
                    html_url: 'http://KAAAAKAA/',
                    language: 'Java',
                    private: true,
                },

                
            ]
        }
        const fakeStore = mockStore(fakeInitialState);
        const userRepositories = mount(
            <HashRouter>
                <RepositoriesComponent store={fakeStore} />
            </HashRouter>
        );
        expect(userRepositories.prop('login')).toBe(undefined);
        expect(userRepositories.prop('reducerRepos')).toBe(undefined);
        expect(mountToJson(userRepositories)).toMatchSnapshot();
    })
});