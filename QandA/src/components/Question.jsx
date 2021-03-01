import React from 'react';

const Question = ({ question }) => (
  <div>
    <p>{question.question_body}</p>
    <p>{question.asker_name}</p>
    <p>{question.question_date}</p>
    <p>{question.question_helpfulness}</p>
    <p>{JSON.stringify(question.answers)}</p>
    <br />
  </div>
);

export default Question;
