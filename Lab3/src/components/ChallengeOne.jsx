import React, { Component } from "react";
//import images
import LookLeft from "../assets/look-left.jpeg";
import LookRight from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
  //declare the state here
  state = { changeDirection: undefined };

  //click left/right button handler goes here

  handleDirection = (direction) => {
    // console.log(direction);
    if (direction === "left") {
      // this.state.changeDirection = true;
      this.setState({ changeDirection: true });
    } else {
      this.setState({ changeDirection: false });
    }
  };

  render() {
    let changeDirection = false;
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.changeDirection ? LookLeft : LookRight}
            alt=""
          />
        </div>
        <button className="btn" onClick={() => this.handleDirection("left")}>
          ⭠
        </button>
        <button className="btn" onClick={() => this.handleDirection("right")}>
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
