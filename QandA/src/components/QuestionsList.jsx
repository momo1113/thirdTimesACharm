import React, { useState } from 'react';
import Question from './Question.jsx';

const QuestionsList = ({
  productData, answers, search,
}) => {
  let questions;
  if (productData) {
    questions = productData.results;
  }

  let answersQ;

  const [moreQ, setMoreQ] = useState(4);
  const [filtered, setFiltered] = useState(questions);

  const filterQs = questions.filter((question) => {
    if (answers[question.question_id]) {
      answersQ = answers[question.question_id].results;
    }
    if (search.length < 3) {
      return true;
    } if (question.question_body.toLowerCase().includes(search)
      || answersQ.some((answer) => answer.body.toLowerCase().includes(search))) {
      return true;
    }
    return false;
  });

  if (JSON.stringify(filtered) !== JSON.stringify(filterQs)) {
    setFiltered(filterQs);
    setMoreQ(4);
  }

  return (
    <>
      {productData
        ? (
          <div>
            {filtered.map((question, index) => {
              if (answers[question.question_id]) {
                answersQ = answers[question.question_id].results;
              }
              return (index < moreQ
                && (
                  <Question
                    key={question.question_id}
                    question={question}
                    answersQ={answersQ}
                    findInQ={false}
                    search={search}
                  />
                )
              );
            })}
            <div>
              {(filtered.length - moreQ > 0)
                && <button type="button" onClick={() => setMoreQ(filtered.length)}>MORE ANSWERED QUESTIONS</button>}
              <button type="button">ADD A QUESTION</button>
            </div>
          </div>
        )
        : <div>This product does not exist. </div>}
    </>
  );
};

export default QuestionsList;
