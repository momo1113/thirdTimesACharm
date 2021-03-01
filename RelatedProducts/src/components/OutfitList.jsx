import React from 'react';
import Card from './Card.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  addToList(e) {
    e.preventDefault();
    this.props.addToList();
  }

  removeFromList(id) {
    this.props.removeFromList(id);
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.addToList}>Add to list</button>
        {this.props.outfitList.map(
          item => <Card handleClick={this.removeFromList} key={item} id={item} />
        )}
      </div>
    );
  }
}

export default OutfitList;
