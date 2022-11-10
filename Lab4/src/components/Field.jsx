import React from "react";

export default class Field extends React.Component {
  state = {
    email: "",
    emailValid: false,
    passwordsValid: false,
  };

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

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
          value={this.props.value}
          onChange={this.onChange}
          ref={(element) => (this.input = element)}
        />
        {/* {!this.isValid ? (
          <div className="Field__HelperMessage">Minimum 8 characters</div>
        ) : null} */}
        <div className="Field__HelperMessage">Minimum 8 characters</div>
      </div>
    );
  }
}
