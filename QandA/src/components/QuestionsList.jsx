import React from 'react';
import Question from './Question.jsx';

const QuestionsList = ({ questions }) => (
  <div>
    {console.log(questions)}
    {questions.map((question) => (
      <Question key={question.question_id} question={question} />
    ))}
  </div>
);

export default QuestionsList;
