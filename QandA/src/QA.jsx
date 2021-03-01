import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QuestionsList from './components/QuestionsList.jsx';
import SearchQuestions from './components/SearchQuestions.jsx';

const QA = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  console.log(products);
  return (
    <div>
      <div>
        <h1>Products</h1>
        {products.map((product) => <p key={product.id}>{JSON.stringify(product)}</p>)}
      </div>
      <h1>Questions & Answers</h1>
      <SearchQuestions />
      <br />
      <QuestionsList />
    </div>
  );
};

ReactDOM.render(<QA />, document.getElementById('app'));
