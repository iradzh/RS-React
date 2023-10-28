import React, { Component } from "react";

import "./Spinner.scss";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="spinner-circle"></div>
      </div>
    );
  }
}

export default Spinner;
