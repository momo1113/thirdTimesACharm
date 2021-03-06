import React, { useState } from 'react';
import Answer from './Answer.jsx';

const AnswersList = ({ answersQ, search, foundInQ }) => {
  const [filteredAns, setFilteredAns] = useState(answersQ);
  const [moreAns, setMoreAns] = useState(2);
  // const [filtered, setFiltered] = useState(answersQ.length);

  const filterAns = answersQ.filter((answer) => {
    if (search.length < 3 || foundInQ) {
      return true;
    } if (answer.body.toLowerCase().includes(search)) {
      return true;
    }
    return false;
  });

  if (JSON.stringify(filteredAns) !== JSON.stringify(filterAns)) {
    setFilteredAns(filterAns);
    setMoreAns(2);
  }

  return (
    <div>
      {filteredAns.map((answer, index) => (index < moreAns
        && <Answer key={answer.answer_id} answer={answer} />))}
      <>
        {filteredAns.length - moreAns > 0
          && <button type="button" onClick={() => setMoreAns(moreAns + 2)}>LOAD MORE ANSWERS</button>}
        {/* <br /> */}
        {/* <a href="jflda">Add Answer</a> */}
      </>
    </div>
  );
};

export default AnswersList;
