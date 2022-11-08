import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: [],
  };

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({ arr: studentList });
    }, 3000);
    console.log(studentList);

    //setStateにしないとupdateされない
    //this.state.arr = studentList
  }

  //random button handler
  randomize = () => {
    this.setState((prevState) => ({
      arr: prevState.arr.sort((a, b) => 0.5 - Math.random()),
    }));

    //0.5: 50%を表す
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.arr.map((student, index) => {
              return <li key={index}>{student}</li>;
            })}
          </ul>
        </div>
        <button className="btn large" onClick={this.randomize}>
          Randomize
        </button>
      </>
    );
  }
}
