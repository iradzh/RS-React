import "./Spinner.scss";

import { Component } from "react";

import luke from "../../assets/luke.png";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner__wrapper">
        <div className="spinner__element" />
        <div className="spinner__message">
          <p>
            The Force will guide us through
            <br />
            this delay caused by a sluggish API
          </p>
          <img alt="Luke" src={luke} />
        </div>
      </div>
    );
  }
}

export default Spinner;
