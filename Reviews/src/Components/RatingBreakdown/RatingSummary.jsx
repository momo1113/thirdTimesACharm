import React from 'react';
import PropTypes from 'prop-types';
import AvgRating from './AvgRating.jsx'
import AvgRec from './AvgRec.jsx'

const RatingSummary = ({ ratings, recommended}) => (
  <div>
    <AvgRating ratings={ratings} />
    <AvgRec recommended={recommended} />
  </div>
);

export default RatingSummary;
