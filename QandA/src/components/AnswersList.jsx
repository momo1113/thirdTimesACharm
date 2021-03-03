import React from 'react';
import Answer from './Answer.jsx';

const AnswersList = ({ answers }) => {
  const answersId = Object.keys(answers);
  return (
    <div>
      {answersId.length > 0
        ? answersId.map((answerId) => (
          // {/* {console.log(answerId)} */ }
          <Answer key={answerId} answer={answers[answerId]} />
        ))
        : <button type="button">Add an answer</button>
      }
    </div>
  );
};

export default AnswersList;
