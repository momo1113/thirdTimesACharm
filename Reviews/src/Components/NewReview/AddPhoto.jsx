import React from 'react';
import PropTypes from 'prop-types';
import css from './NewReview.css';

class AddPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.sendPhotos = this.sendPhotos.bind(this);
  }

  handleChange(event) {
    const photoArr = this.state.photos
    photoArr[event.target.name] = event.target.value;
    this.setState({ photos: photoArr });
  }

  sendPhotos() {
    // debugger
    this.props.updateState(this.state);
    // debugger
    // console.log('hi')
    this.props.hide();
  }

  // handleSubmit(event) {
  //   this.props.updateState(this.state);
  //   event.preventDefault();
  // }

  render() {
    console.log(this.state);
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <form>
            <label>
              Photo 1:
              <input
                name="0"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Photo 2:
              <input
                name="1"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Photo 3:
              <input
                name="2"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Photo 4:
              <input
                name="3"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Photo 5:
              <input
                name="4"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <br />
            {/* <input type="submit" value="Submit" /> */}
          </form>
          <button onClick={this.sendPhotos}>Button</button>
        </section>
      </div>
    );
  }
}

export default AddPhoto;