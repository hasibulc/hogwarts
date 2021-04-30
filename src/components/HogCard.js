import React, { Component } from "react";
import HogDetail from "./HogDetail";

class HogCard extends Component {
  state = {
    detailDisplay: false,
  };

  detailClick = () => {
    this.setState({ detailDisplay: !this.state.detailDisplay });
  };

  render() {
    const {
      name,
      specialty,
      greased,
      weight,
      ["highest medal achieved"]: medal,
      image,
    } = this.props.hog;
    console.log(this.state.detailDisplay);
    return (
      <div onClick={this.detailClick}>
        name: {name}
        <br />
        {/* specialty: {specialty} <br />
        greased: {greased}
        <br />
        weight: {weight}
        <br />
        highest medal achieved: {medal}
        <br /> */}
        image: {image}
        {/* conditional ? true logic : false logic */}
        {this.state.detailDisplay ? (
          <HogDetail
            specialty={specialty}
            greased={greased}
            weight={weight}
            medal={medal}
          />
        ) : null}
        <hr />
      </div>
    );
  }
}

export default HogCard;
