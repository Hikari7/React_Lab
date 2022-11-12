import { Component } from "react";

import Field from "./components/Field";
import Button from "./components/Button";

import { validatePassword, validateEmail } from "./util/validators";

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

class App extends Component {
  state = {
    email: "",
    password: "",
    emailHint: "",
    passwordHint: "",
    disableBtn: true,
  };

  //Component の props または state が変更されたときに実行される、DOMの２回目以降の処理とか
  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  changeHandler = (evt) => {
    // console.log(evt);
    const { name, value } = evt.target;

    //もしフォームが空じゃなかったら
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ disableBtn: false });
    } else {
      this.setState({ disableBtn: true });
    }

    //console.log("updating on" + [name]);
    //[name]でもっとダイナミックにemailかpasswordのvalueを判断できる
    this.setState({ [name]: value });
  };

  submitHandler = () => {
    const emailHint = validateEmail(this.state.email);
    this.setState({ emailHint: !emailHint ? "Invalid email address" : "" });
    const passwordHint = validatePassword(this.state.password);
    this.setState({ passwordHint: passwordHint ? passwordHint : "" });

    if (this.state.emailHint === "" && this.state.passwordHint === "") {
      alert("Sign up successful!");
    }
  };

  clearFields = () => {
    this.setState({ email: "", password: "" });
  };

  render() {
    //this.stateを省略できる書き方
    const { email, password, disableBtn, emailHint, passwordHint } = this.state;

    //labelとかtypeはpropsとして渡しているのでもっとダイダミカルな形にすることが可能
    //labelはどっちのfieldにinputしているか判断するためのprops

    return (
      <div className="App">
        <h1>React Lab 4</h1>
        <h1>Login</h1>
        <div className="Container">
          <Field
            label="email"
            type="text"
            value={email}
            onChange={this.changeHandler}
            hint={emailHint}
          />
          <Field
            label="password"
            type="password"
            value={password}
            onChange={this.changeHandler}
            hint={passwordHint}
          />

          <div className="Buttons">
            <Button label="Clear" onClick={this.clearFields} />
            <div className="Spacer" />
            <Button
              label="Sign up"
              isDisabled={disableBtn}
              onClick={this.submitHandler}
            />
          </div>
        </div>
      </div>
    );
  }

  //onClickはちょっと名前紛らわしいけどpropsとして定義されています
}

export default App;
