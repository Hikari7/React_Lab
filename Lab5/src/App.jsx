import { useState } from "react";
import Field from "./components/Field";
import Button from "./components/Button";
import React from "react";
import { validateEmail, validatePassword } from "./util/validators";

const App = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const submitHandler = (email, password) => {
    console.log("aaaaa");
    const emailHint = validateEmail(email);
    //console.log(values.email);
    {
      values.email;
    }
    emailHint ? "Invalid email address" : "";

    const passwordHint = validatePassword(password);
    {
      values.password;
    }
    passwordHint ? "Invalid email address" : "";

    // if (values == true && setValid === true) {
    //   alert("Sign up successful!");
    // }
  };



  return (
    <div>
      <div className="App">
        <h1>React Lab 5</h1>
        <h1>Sign Up</h1>
        <div className="Container">
          <Field
            label="email"
            type="text"
            setValues={setValues}
            setDisabled={setDisabled}
          />
          <Field
            label="password"
            type="password"
            setValues={setValues}
            setDisabled={setDisabled}
          />
          <div className="Buttons">
            <Button
              label="Clear"
              values={values}
              setValid={setValid}
              isDisabled={isDisabled}
              onClick={submitHandler}
            />
            <div className="Spacer" />
            <Button
              label="Sign up"
              isDisabled={isDisabled}
              values={values}
              setValid={setValid}
              onClick={submitHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

