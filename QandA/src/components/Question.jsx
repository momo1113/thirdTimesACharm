import React from 'react';
import AnswersList from './AnswersList.jsx';

const Question = ({ question }) => (
  <div>
    <div>
      <h1>Q:</h1>
      <h2>{question.question_body}</h2>
    </div>
    <div>
      <h1>A:</h1>
      <AnswersList answers={question.answers} />
    </div>
    <div>
      <p>{question.question_date}</p>
      <p>Helpful? Yes ({question.question_helpfulness})</p>
    </div>
    <br />
  </div>
);

export default Question;
