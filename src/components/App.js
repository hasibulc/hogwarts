import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";

class App extends Component {
  render() {
    // console.log(hogs);
    return (
      <div className="App">
        <Nav />
        <HelloWorld hogsData={hogs} />
      </div>
    );
  }
}

export default App;
