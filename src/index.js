import React, { Component } from "react";
// import "../style.scss";

// import Loader from "../images/loader.gif";

class GenericButton extends Component {
  render() {
    return (
      <div
        className={`button ${this.props.className ? this.props.className : ""}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
        {/* {this.props.isLoading && <img src={Loader} />} */}
      </div>
    );
  }
}

export default GenericButton;