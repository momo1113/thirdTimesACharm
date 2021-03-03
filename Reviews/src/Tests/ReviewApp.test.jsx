import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReviewApp from '../Components/ReviewApp.jsx';
import ReviewBody from '../Components/ReviewList/ReviewBody.jsx';

const sampleReview = {
  review_id: 147757,
  rating: 5,
  summary: 'summary',
  recommend: true,
  response: null,
  body: 'body',
  date: '2020-09-08T00:00:00.000Z',
  reviewer_name: 'Mandy46',
  helpfulness: 25,
  photos: [
    {
      id: 186995,
      url: 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80',
    },
  ],
};

test('has loading screen', () => {
  const wrapper = shallow(<ReviewApp />);
  expect(wrapper.find('div').text()).toContain('Loading');
});

test('review body has two p\'s', () => {
  const wrapper = shallow(<ReviewBody review={sampleReview} />);
  expect(wrapper.find('p')).toHaveLength(2);
});

function setup() {
  const props = {
    id: 14932,
  };
  const wrapper = shallow(<ReviewApp />);
  return { wrapper, props };
}

// describe('has buttons', () => {
//   it('Should have a button', () => {
//     const { wrapper } = setup();
//     expect(wrapper.find('button').exists()).toBe(true);
//   });
// });


// import { shallow, mount, render } from 'enzyme';
// import React from 'react';
// import App from './App.jsx';

// test('Link changes the class when hovered', () => {
//   const wrapper = shallow(<App />);
//   console.log(wrapper.find('h1'));
//   expect(wrapper.find('h1').text()).toContain('Hello');
// });
