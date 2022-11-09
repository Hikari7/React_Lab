import React from "react";

export default class Field extends React.Component {
  state = {
    value: "",
    email: "",
    passwoerd: "",
    isValid: false,
  };

  componentDidMount() {
    console.log(this.input);
    if (this.input) {
      this.input.focus();
    }
  }

  //とりあえずfieldでは、refで何をユーザーが打ったか、とそれがvalidの判定と正しいか、を書かなきゃいけないとおもう
  //で、それをApp,jsxに渡してそれをButtonに渡す
  //
  //Helperfaunctionここで作る？

  onChange = (e) => {
    // let numbers = /[0-9]/g;
    let inputValue = this.input.value;

    if (inputValue.length >= 8) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
    console.log(this.state.isValid);
  };

  render() {
    // console.log(this.props.label);
    return (
      <div className="Field">
        <div className="Field__Label">{this.props.label}</div>
        <input
          className="Field__Input"
          value={this.value}
          onChange={this.onChange}
          ref={(element) => (this.input = element)}
        />
        {!this.isValid ? (
          <div className="Field__HelperMessage">Minimum 8 characters</div>
        ) : null}
      </div>
    );
  }
}
