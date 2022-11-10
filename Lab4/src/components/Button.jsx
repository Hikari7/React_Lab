import React from "react";

export default class Button extends React.Component {
  // btns = () => {
  //   if (this.props.label === "Clear") {
  //     // console.log("Clear is clicked");
  //   }
  //   if (this.props.label === "Login") {
  //     // console.log("Login is clicked");
  //     onsubmit = (e) => {
  //       e.preventDefault(e);
  //       const isValid = this.formValidation();
  //     };
  //   }
  // };

  render() {
    console.log(this.props);
    return (
      <button className="Button">
        <div className="Button__Label" onClick={this.props.handleClick}>
          {this.props.label}
        </div>
      </button>
    );
  }
}
