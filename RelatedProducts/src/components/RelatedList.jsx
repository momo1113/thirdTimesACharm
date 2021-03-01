import React from 'react';
import Card from './Card.jsx';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompare = this.handleCompare.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleCompare(id) {
    console.log('handlecompare')
  }

  handleScroll(e) {
    e.preventDefault();
    this.props.handleScroll('relatedList', e.target.id);
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.handleScroll} id="left">&lt;&lt;</button>
        <div className="list" id="relatedList">
          {this.props.relatedList.map((item) => {
            return <Card handleClick={this.handleCompare} key={item} id={item} />
          })}
        </div>
        <button onClick={this.handleScroll} id="right">&gt; &gt; </button>
      </div>
    )
  }
}

export default RelatedList;
