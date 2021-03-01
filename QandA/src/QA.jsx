import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QuestionsList from './components/QuestionsList.jsx';
import SearchQuestions from './components/SearchQuestions.jsx';

// class QA extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: {},
//     };
//     this.randomProduct = this.randomProduct.bind(this);
//   }

//   componentDidMount() {
//     axios.get('/products')
//       .then((response) => {
//         this.setState({
//           products: response.data,
//         });
//         const random = this.randomProduct(response.data);
//         this.setState({
//           product: random,
//         });
//         axios.get(`/questions/${random}`)
//           .then((res) => {
//             this.setState({
//               questions: res.data,
//             });
//           })
//           .catch((err) => {
//             throw (err);
//           });
//       })
//       .catch((err) => {
//         throw (err);
//       });
//   }

//   randomProduct(productsList) {
//     return productsList[(Math.floor(Math.random() * productsList.length))].id;
//   }

//   render() {
//     const { questions, product } = this.state;
//     return (
//       <div>
//         <h1>Questions and Answers</h1>
//         <SearchQuestions />
//         <br />
//         <QuestionsList questions={questions} product={product} />
//       </div>
//     );
//   }
// }

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

  // console.log(questions);

  return (
    <div>
      {console.log(questions)}
      <h1>Questions & Answers</h1>
      {questions.length > 0
        ? <SearchQuestions />
        : <div>No questions</div>
      }
      <br />
      {questions.length > 0
        ? <QuestionsList questions={questions[product]} />
        : <div>No questions passed</div>
      }
    </div>
  );
};

ReactDOM.render(<QA />, document.getElementById('app'));
