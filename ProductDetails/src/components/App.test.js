// Link.react.test.js
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App.js';
import SubApp from './SubApp.js'

it('Link changes the class when hovered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toContain('hello');
});

// it('Should contain button in SubApp', () => {
//     const wrapper = shallow(<App />);
//     const subApp = wrapper.find(SubApp);
//     expect(subApp.find('button').text()).toContain('hello');
// });