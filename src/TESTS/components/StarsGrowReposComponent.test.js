import React from 'react';
import StarsGrowReposComponent from '../../components/StarsGrowReposComponent';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

describe('StarsGrowReposComponent component test', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        reducerStarsGrowRepos:
            [
                {
                    name: 'asdasd',
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

    it('starsGrowReposComponent component rendered succesfully', () => {
        const starsGrowReposComponent = mount(
            <StarsGrowReposComponent store={store} />
        );
        expect(mountToJson(starsGrowReposComponent)).toMatchSnapshot();
    });
    
    it('starsGrowReposComponent component rendered succesfully', () => {
       
        const fakeInitialState = {
           
            reducerStarsGrowRepos: undefined

                
            
        }
        const fakeStore = mockStore(fakeInitialState);
        const userRepositories = mount(
            
                <StarsGrowReposComponent store={fakeStore} />
            
        );
        expect(userRepositories.prop('reducerStarsGrowRepos')).toBe(undefined);
        expect(mountToJson(userRepositories)).toMatchSnapshot();
    });

 
});