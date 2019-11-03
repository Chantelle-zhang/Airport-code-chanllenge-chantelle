import React from 'react';
import { shallow } from "enzyme/build";
import App from './App'
import HomePage from "./component/HomePage/HomePage";


describe('Check App component', () => {

    it('has one HomePage component ', () => {
        const wrapper = shallow(<App/>);
        const homepage = wrapper.find(HomePage);
        expect(homepage.length).toBe(1);

    });
})
