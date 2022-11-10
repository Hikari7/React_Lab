import React from "react";

export default class Field extends React.Component {
  state = {
    emailValid: false,
    passwordsValid: false,
  };

  onChange = (e) => {
    let inputValue = this.input.value;
    // console.log(this.props);
    // console.log(inputValue);

    this.setState(() => {
      email: inputValue;
      password: inputValue;
    });
  };

  render() {
    //console.log(this.props.label);

    return (
      <div className="Field">
        <div className="Field__Label">{this.props.label}</div>
        <input
          className="Field__Input"
          value={this.value}
          onChange={this.onChange}
          ref={(element) => (this.input = element)}
        />
        {/* {!this.isValid ? (
          <div className="Field__HelperMessage">Minimum 8 characters</div>
        ) : null} */}
      </div>
    );
  }
}
