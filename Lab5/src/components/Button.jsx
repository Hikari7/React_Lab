import React from "react";
import { validateEmail } from "../util/validators";
import { useState } from "react";

function Button({ setDisabled, label, values }) {
  console.log(label);
  const [valid, setValid] = useState(false);

  const submitHandler = (email, password) => {
    console.log(email);
    const emailHint = validateEmail(email);
    if (valid == false) {
      !emailHint ? "Invalid email address" : "";
    }
    // const passwordHint = validatePassword(password);
    // if (valid == false) {
    //   passwordHint ? passwordHint : "";
    // }

    if (valid == true && valid === true) {
      alert("Sign up successful!");
    }
  };
  return (
    <button
      className="Button"
      setDisabled={setDisabled}
      onClick={submitHandler}
    >
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
