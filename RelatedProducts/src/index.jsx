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
    localStorage.setItem('outfitList', [14036, 14807]);
    const outfitList = localStorage.getItem('outfitList').split(',');
    this.setState({ outfitList });
  }

  render() {
    console.log(this.state.relatedList)
    console.log(this.state.outfitList)
    return (
      <div>
        <RelatedList relatedList={this.state.relatedList} />
        <RelatedList relatedList={this.state.outfitList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
// export default App;
