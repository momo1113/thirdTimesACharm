import React from 'react';
import Card from './Card.jsx';

class RelatedList extends React.Component {

  render() {
    console.log(this.props.relatedList)
    return (
      <div className="container">
        {this.props.relatedList.map((item) => {
          return <Card key={item} id={item}/>
        })}
      </div>
    )
  }
}

export default RelatedList;
