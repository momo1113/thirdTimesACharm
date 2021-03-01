import React from 'react';
import Card from './Card.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  addToList(e) {
    e.preventDefault();
    this.props.addToList();
  }

  removeFromList(id) {
    this.props.removeFromList(id);
  }

  handleScroll(e) {
    e.preventDefault();
    this.props.handleScroll('outfitList', e.target.id);
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.handleScroll} id="left">&lt;&lt;</button>
        <div className="list" id="outfitList">
          <button onClick={this.addToList}>Add to list</button>
          {this.props.outfitList.map(
            item => <Card handleClick={this.removeFromList} key={item} id={item} />
          )}
        </div>
        <button onClick={this.handleScroll} id="right">&gt; &gt; </button>
      </div>
    );
  }
}

export default OutfitList;
