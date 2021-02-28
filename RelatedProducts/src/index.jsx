import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedList from './components/RelatedList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      relatedList: [],
      outfitList: [],
      style: {},
    };
  }

  componentDidMount() {
    axios.get('/products/14034')
      .then((res) => {
        this.setState({ currentProduct: res.data });
      });
    axios.get('/products/14034/related')
      .then((res) => {
        this.setState({ relatedList: res.data });
      });
    axios.get('/products/14034/styles')
      .then((res) => {
        this.setState({ style: res.data });
      });
  }

  render() {
    console.log(this.state.relatedList)
    return (
      <RelatedList relatedList={this.state.relatedList} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
// export default App;
