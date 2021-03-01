import React from 'react';
import Question from './Question.jsx';

const QuestionsList = ({ questions }) => (
  <div>
    {console.log(questions)}
    <h1>Hello</h1>
    {questions.map((question) => (
      <Question question={question} />
    ))}
  </div>
);

export default QuestionsList;
