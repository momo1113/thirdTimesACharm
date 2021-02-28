/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ImageCarousel from './ImageCarousel.jsx';

class ImageGallery extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      styles: [],
    };
  }

  componentDidMount() {
    // why /products/:${id}/styles doesn't work
    axios.get('/styles')
      .then((response) => {
        const { results } = response.data;
        // eslint-disable-next-line react/no-unused-state
        this.setState({ styles: results });
        // eslint-disable-next-line react/prop-types
        this.props.getStyles(results);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="image_gallery">
        <ImageCarousel styles={this.state.styles} />
      </div>
    );
  }
}

export default ImageGallery;
