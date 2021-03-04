import { shallow, mount, render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import ReviewApp from '../Components/ReviewApp.jsx';
import ReviewBody from '../Components/ReviewList/ReviewBody.jsx';
import AddPhoto from '../Components/NewReview/AddPhoto.jsx';

test('adds photos', () => {
  const wrapper = shallow(<AddPhoto />);
  wrapper
    .find('input')
    .first()
    .simulate('change', { target: { name: 0, value: 'foo' } });

  expect(wrapper.state('photos')).toHaveLength(1);
});