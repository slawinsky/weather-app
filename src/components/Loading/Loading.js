import Spinner from "react-spinner-material";
import React, { Component } from "react";

class Example extends Component {
  render() {
    return (
      <div>
        <Spinner radius={40} color={"#fff"} stroke={5} visible={true} />
      </div>
    );
  }
}

export default Example;
