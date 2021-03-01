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

  handleScroll(e) {
    e.preventDefault();
    const list = document.getElementById('relatedList');
    console.log(e.target.id)
    switch(e.target.id) {
      case 'left':
        list.scrollLeft -= 80;
        break;

        case 'right':
          list.scrollLeft += 80;
          break;
    }
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
