import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedList from './components/RelatedList.jsx';
import OutfitList from './components/OutfitList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 14034,
      relatedList: [],
      outfitList: [],
    };
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  componentDidMount() {
    axios.get('/products/14034/related')
      .then((res) => {
        this.setState({ relatedList: res.data });
      });
    axios.get('/products/14034/styles')
      .then((res) => {
        this.setState({ style: res.data });
      });
    const outfitList = localStorage.getItem('outfitList').split(',');
    this.setState({ outfitList });
  }

  addToList() {
    let outfitList = localStorage.getItem('outfitList').split(',');
    outfitList.push(this.state.currentProductId.toString());
    localStorage.setItem('outfitList', outfitList);
    this.setState({ outfitList });
  }

  removeFromList(id) {
    let outfitList = localStorage.getItem('outfitList').split(',');
    const newList = outfitList.filter((element) => element !== id);
    localStorage.setItem('outfitList', newList);
    this.setState({ outfitList: newList });
  }

  render() {
    return (
      <div>
        <RelatedList relatedList={this.state.relatedList} />
        <OutfitList removeFromList={this.removeFromList} addToList={this.addToList} outfitList={this.state.outfitList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
// export default App;
