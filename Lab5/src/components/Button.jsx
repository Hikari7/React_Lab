import React from "react";
import { validateEmail, validatePassword } from "../util/validators";
import { useState } from "react";

function Button({ isDisabled, label, values, setValid, submitHandler }) {
  // console.log(label);

  // const submitHandler = (email, password) => {
  //   // console.log("aaaaa");
  //   const emailHint = validateEmail(email);
  //   //console.log(values.email);
  //   {
  //     values.email;
  //   }
  //   emailHint ? "Invalid email address" : "";

  //   const passwordHint = validatePassword(password);
  //   {
  //     values.password;
  //   }
  //   passwordHint ? "Invalid email address" : "";

  //   // if (values == true && setValid === true) {
  //   //   alert("Sign up successful!");
  //   // }
  // };

  return (
    <button className="Button" isDisabled={isDisabled} onClick={submitHandler}>
      <div className="Button__Label">{label}</div>
    </button>
  );
}

export default Button;
// import React from "react";
// import App from "../App";

// export default class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className="Button"
//         disabled={setDisabled}
//         onClick={this.props.onClick}
//       >
//         <div className="Button__Label">{this.props.label}</div>
//       </button>
//     );
//   }
// }
