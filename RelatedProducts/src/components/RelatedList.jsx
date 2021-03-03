import React from 'react';
import Card from './Card.jsx';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompare = this.handleCompare.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleCompare(id) {
    this.props.handleCompare(id);
  }

  handleScroll(e) {
    const { handleScroll } = this.props;
    e.preventDefault();
    handleScroll('relatedList', e.target.id);
  }

  render() {
    const { relatedList, currentProduct } = this.props;
    return (
      <div className="container">
        <button onClick={this.handleScroll} id="left">&lt;&lt;</button>
        <div className="list" id="relatedList">
          {relatedList.map((item) => (
            <Card handleClick={this.handleCompare} key={item} id={item} list="relatedList" currentProduct={currentProduct}/>
          ))}
        </div>
        <button onClick={this.handleScroll} id="right">&gt; &gt; </button>
      </div>
    )
  }
}

export default RelatedList;
