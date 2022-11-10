import { Component } from "react";

import Field from "./components/Field";
import Button from "./components/Button";

/**
 *
 *
 * Create a form with common features like validation and help messages.
 *
 * - Add validation for email and password (https://www.w3schools.com/howto/howto_js_password_validation.asp)
 * - Show a helper message for validation errors
 * - Disable Login button until the form is valid
 * - Show a confirmation alert/modal/dialog when the Clear button is pressed
 * - Clear the form when the dialog is confirmed
 * - When validation checks are good, show a confirmation alert/modal/dialog
 *
 *
 */

//親コンポーネント


class App extends Component {
  state = {
    email: "",
    password: "",
    emailHelperMsg: "",
    passwordHelperMsg: "",
    // emailValid: false,
    // passwordsValid: false,
  };

  handleClick = (e) => {
    console.log("aaa");
  };


  render() {
    return (
      <div className="App">
        <h1>React Lab 4</h1>
        <h1>Login</h1>
        <div className="Container">

          <Field label="Email" value={this.state.email} />
          <Field label="Password" value={this.state.password} />

          <div className="Buttons">
            <Button label="Clear" onClick={this.state.handleClick} />
            <div className="Spacer" />
            <Button label="Login" handleClick={this.state.handleClick} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
