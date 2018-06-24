import React from 'react';
import AllReposFind from '../../components/AllReposFind';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { HashRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('AllReposFind component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        reducerAllRepos: [
            {
                login: 'logoped583st',
                avatar_url: 'https://avatars3.githubusercontent.com/u/30079690?s=400&u=e3443b749fa4d36979e0d631192f3a7bbadc3eeb&v=4'
            }
        ]
    }

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('AllReposFind component rendered succesfully', () => {
        const allRepos = mount(
            <HashRouter>
                <AllReposFind store={store} />
            </HashRouter>
        );
        expect(mountToJson(allRepos)).toMatchSnapshot();
        expect(allRepos.prop('repos')).toBe(undefined);
        expect(allRepos.find("orgs_adds").at(0)).toMatchSnapshot();
    });

    it('AllReposFind rendered without user login', () => {
        const fakeInitialState = {
            reducerAllRepos: [
                
            ]
        }
        const fakeStore = mockStore(fakeInitialState);
        const allRepos = mount(
            <HashRouter>
                <AllReposFind store={fakeStore} />
            </HashRouter>
        );


    })
    
});