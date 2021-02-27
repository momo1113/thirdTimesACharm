import React from 'react';
import App from './index.jsx';
import { shallow, mount, render } from 'enzyme';


it('should render index page', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').text()).toContain('Jin');
});