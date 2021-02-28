import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsList from './components/QuestionsList.jsx';
import SearchQuestions from './components/SearchQuestions.jsx';

const QA = (props) => {
  return (
    <div>
      <h1>Questions & Answers</h1>
      <SearchQuestions />
      <br />
      <QuestionsList />
    </div>
  );
}

ReactDOM.render(<QA />, document.getElementById('app'));