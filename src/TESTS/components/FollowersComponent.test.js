import React from 'react';
import FollowersCompomponent from '../../components/FollowersComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { HashRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('Followers component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        reducerUser: {
            login: 'logoped583st'
        },
        reducerFollowers: [
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

    it('Followers component rendered succesfully', () => {
        const userFollowers = mount(
            <HashRouter>
                <FollowersCompomponent store={store} />
            </HashRouter>
        );
        expect(mountToJson(userFollowers)).toMatchSnapshot();
    });

    it('Followers rendered without user login', () => {
        const fakeInitialState = {
            reducerUser: {
                login: ''
            },
            reducerFollowers: [
                {
                    login: 'logoped583st',
                    avatar_url: 'https://avatars3.githubusercontent.com/u/30079690?s=400&u=e3443b749fa4d36979e0d631192f3a7bbadc3eeb&v=4'
                }
            ]
        }
        const fakeStore = mockStore(fakeInitialState);
        const userFollowers = mount(
            <HashRouter>
                <FollowersCompomponent store={fakeStore} />
            </HashRouter>
        );
        expect(userFollowers.prop('login')).toBe(undefined);
        expect(userFollowers.prop('follower')).toBe(undefined);

        expect(mountToJson(userFollowers)).toMatchSnapshot();
    })

    it('UserFollowers rendered without user login', () => {
        const fakeInitialState = {
            reducerUser: {
                login: ''
            },
            reducerFollowers: [
                {
                    login: 'logoped583st',
                    avatar_url: 'https://avatars3.githubusercontent.com/u/30079690?s=400&u=e3443b749fa4d36979e0d631192f3a7bbadc3eeb&v=4'
                }
            ]
        }
        const fakeStore = mockStore(fakeInitialState);
        const userFollowers = mount(
            <HashRouter>
                <FollowersCompomponent store={fakeStore} />
            </HashRouter>
        );
        expect(userFollowers.prop('login')).toBe(undefined);
        expect(userFollowers.prop('followers')).toBe(undefined);


        expect(mountToJson(userFollowers)).toMatchSnapshot();
    })

    it('UserFollowers rendered without user login', () => {
        const fakeInitialState = {
            reducerUser: {
                login: ''
            },
            reducerFollowers: [
                {
                    login: '',
                    avatar_url: 'https://avatars3.githubusercontent.com/u/30079690?s=400&u=e3443b749fa4d36979e0d631192f3a7bbadc3eeb&v=4'
                }
            ]
        }
        const fakeStore = mockStore(fakeInitialState);
        const userFollowers = mount(
            <HashRouter>
                <FollowersCompomponent store={fakeStore} />
            </HashRouter>
        );

        expect(userFollowers.prop('followers')).toBe(undefined);
        expect(mountToJson(userFollowers)).toMatchSnapshot();
    })

});