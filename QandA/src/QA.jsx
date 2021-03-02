import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QuestionsList from './components/QuestionsList.jsx';
import SearchQuestions from './components/SearchQuestions.jsx';

const QA = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [questions, setQuestions] = useState({});

  const randomProduct = (response) => (
    response.data[Math.floor(Math.random() * response.data.length)].id
  );

  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setProducts(response.data);
        const random = randomProduct(response);
        setProduct(random);
        axios.get(`/questions/${random}`)
          .then((res) => {
            setQuestions(res.data);
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div>
      {/* {questions[product] !== undefined && console.log(questions[product])} */}
      <h1>Questions & Answers</h1>
      {questions[product] !== undefined
        ? <SearchQuestions />
        : <div>Loading...</div>
      }
      <br />
      {questions[product] !== undefined
        ? <QuestionsList questions={questions[product]} />
        : <div>Loading...</div>
      }
    </div>
  );
};

ReactDOM.render(<QA />, document.getElementById('app'));
