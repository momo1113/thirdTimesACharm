import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from './App.jsx';
import SubApp from './SubApp.jsx';

test('Should contain h1 child in App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').text()).toContain('Hello');
});

test('Should contain h1 child in SubApp', () => {
  const wrapper = shallow(<SubApp />);
  expect(wrapper.find('h1').text()).toContain('Click Me');
});

// test('Should contain button in SubApp', () => {
//   const wrapper = shallow(<App />);
//   const subApp = wrapper.find('SubApp')
//   expect(subApp.find('h1').text()).toContain('Click Me');
// });