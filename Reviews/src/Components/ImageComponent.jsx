import React from "react";
import "/Users/gusfeliciano345/Desktop/Hack Reactor/bootcamp/FEC/soloFEC/thirdTimesACharm/Reviews/src/Components/NewReview/NewReview.css";

class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleShowDialog = this.handleShowDialog.bind(this);
  }

  handleShowDialog() {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <>
        <img
          className="small"
          src={this.props.src}
          onClick={this.handleShowDialog}
          alt="small image"
          width="50px"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={this.props.src}
              onClick={this.handleShowDialog}
              alt="big image"
            />
          </dialog>
        )}
      </>
    );
  }
}

export default ImageComponent;
