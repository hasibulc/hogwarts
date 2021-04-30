import React, { Component } from "react";
import HogCard from "./HogCard";

class HelloWorld extends Component {
  renderHogs = () => {
    return this.props.hogsData.map((hog, index) => (
      <HogCard key={index} hog={hog} />
    ));
  };

  render() {
    // console.log(this.props.hogsData);
    return (
      <div className="hello-world">
        <h1>Hello World</h1>
        {/* {this.renderHogs()} */}
        {this.renderHogs()}
        {/* <HogCard /> */}
      </div>
    );
  }
}

export default HelloWorld;
