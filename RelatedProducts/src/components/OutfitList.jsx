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
    const { currentImg, outfitList, handleScroll, currentProduct } = this.props;
    return (
      <div className="container">
        <button onClick={this.handleScroll} id="left">&lt;&lt;</button>
        <div className="list" id="outfitList">

          <div className="card" onClick={this.addToList}>
            <div className="addList">
              <div className="frame">
                <img src={currentImg} alt="image" />
              </div>
              <div>Add To Outfit List</div>
              <div id="addSign">+</div>
            </div>
          </div>

          {outfitList.map(
            (item) => <Card handleClick={this.removeFromList} key={item} id={item} list="outfitList" currentProduct={currentProduct} />,
          )}
        </div>
        <button onClick={this.handleScroll} id="right">&gt; &gt; </button>
      </div>
    );
  }
}

export default OutfitList;
