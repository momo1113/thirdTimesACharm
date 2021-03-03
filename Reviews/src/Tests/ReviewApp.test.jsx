import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReviewApp from '../Components/ReviewApp.jsx';

test('has loading screen', () => {
  const wrapper = shallow(<ReviewApp />);
  expect(wrapper.find('div').text()).toContain('Loading');
});

// import { shallow, mount, render } from 'enzyme';
// import React from 'react';
// import App from './App.jsx';

// test('Link changes the class when hovered', () => {
//   const wrapper = shallow(<App />);
//   console.log(wrapper.find('h1'));
//   expect(wrapper.find('h1').text()).toContain('Hello');
// });
