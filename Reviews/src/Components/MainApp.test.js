import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainApp from './MainApp.jsx';

test('h1 tag has text', () => {
  const wrapper = shallow(<MainApp />);
  expect(wrapper.find('h1').text()).toContain('Hello123456');
});

// import { shallow, mount, render } from 'enzyme';
// import React from 'react';
// import App from './App.jsx';

// test('Link changes the class when hovered', () => {
//   const wrapper = shallow(<App />);
//   console.log(wrapper.find('h1'));
//   expect(wrapper.find('h1').text()).toContain('Hello');
// });
