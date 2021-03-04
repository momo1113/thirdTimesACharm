import React from 'react';
import PropTypes from 'prop-types';
import BreakdownItem from './BreakdownItem.jsx'

const Breakdown = ({ ratings, selectStars }) => {
  const sortedArr = [];

  Object.keys(ratings).forEach(key => {
    // console.log(key)
    const entry = [Number(key), Number(ratings[key])];
    sortedArr[Math.abs(Number(key) - 5)] = entry;
  });

  return (
    <div>
      {sortedArr.map((pair, index) => (
        <BreakdownItem
          selectStars={selectStars}
          pair={pair}
          key={index}
        />
      ))}
    </div>

  );
};

export default Breakdown;
//   "ratings": {
//       "1": "5",
//       "2": "8",
//       "3": "15",
//       "4": "8",
//       "5": "3"
//   },