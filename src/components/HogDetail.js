import React, { Component } from "react";

class HogDetail extends Component {
  render() {
    const {
      specialty,
      greased,
      weight,
      ["highest medal achieved"]: medal,
    } = this.props;
    return (
      <div>
        specialty: {specialty} <br />
        greased: {greased}
        <br />
        weight: {weight}
        <br />
        highest medal achieved: {medal}
        <br />
      </div>
    );
  }
}

export default HogDetail;
