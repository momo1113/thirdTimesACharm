import React from 'react';
import PropTypes from 'prop-types';
import css from './NewReview.css';
import Rating from './Rating.jsx';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      summary: '',
      body: '',
      recommend: null,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
    };

    this.updateState = this.updateState.bind(this);
  }
  // this.props.factors for fit, width, etc

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    console.log(this.state);
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          hello!
        <Rating updateState={this.updateState} updateState={this.updateState} />
        </section>
      </div>
    );
  }
}

export default NewReview;


// render() {
//   const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         hello!
//         <Rating updateState={this.updateState} />
//       </section>
//     </div>
//   );
// }
// }


// render() {
//   const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         <form>
//           <label>
//             Overall
//             <input
//               name="overall"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <br />
//           <label>
//             Number of guests:
//             <input
//               name="numberOfGuests"
//               type="number"
//               value={this.state.numberOfGuests}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </form>
//       </section>
//     </div>
//   );
// }
// }