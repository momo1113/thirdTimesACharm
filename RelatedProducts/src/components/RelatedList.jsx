import React from 'react';
import Card from './Card.jsx';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompare = this.handleCompare.bind(this);
  }

  handleCompare(id) {
    console.log('handlecompare')
  }

  render() {
    return (
      <div className="container">
        {this.props.relatedList.map((item) => {
          return <Card handleClick={this.handleCompare} key={item} id={item}/>
        })}
      </div>
    )
  }
}

export default RelatedList;
