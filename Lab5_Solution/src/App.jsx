import { useState, useEffect } from "react";

import Field from "./components/Field";
import Button from "./components/Button";

import { validateEmail, validatePassword } from "./util/validators";

function App() {
  const [data, setData] = useState({ email: "", password: "" });
  const [emailHint, setEmailHint] = useState(null);
  const [passwordHint, setPasswordlHint] = useState(null);
  const [disableBtn, setDisableBtn] = useState(true);

  //dataが変わるたびにuseEffectが発火される
  useEffect(() => {
    //もしemailとpasswordが空じゃなかったら
    if (data.email !== "" && data.password !== "") {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [data]);

  useEffect(() => {
    if (emailHint === "" && passwordHint === "") {
      alert("Sign up successful!");
    }
  }, [emailHint, passwordHint]);

  //componentの中でアロー関数書くときはconstで宣言しようね
  const changeHandler = (evt) => {
    const { name, value } = evt.target;

    //setDateにはオブジェクトで２つの要素があるので、setDataの中にコールバック関数を作ってそのprevStateを更新するようにする
    //[]を使うことで、オブジェクト内の２つの要素をダイナミックにchangeHandlerの中に入れて操作できることができる
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    const emailHintValidate = validateEmail(data.email); //calling a helper function
    setEmailHint(!emailHintValidate ? "Invalid email address" : "");

    const passwordHintValidate = validatePassword(data.password);
    setPasswordlHint(passwordHintValidate ? passwordHintValidate : "");
  };

  const clearFields = () => {
    console.log("Cleared all fields");
    setData({ email: "", password: "" });
  };

  return (
    <div className="App">
      <h1>React Lab 4</h1>
      <h1>Sign Up</h1>
      <div className="Container">
        <Field
          label="email"
          type="text"
          value={data.email}
          onChange={changeHandler}
          hint={emailHint}
        />
        <Field
          label="password"
          type="text"
          value={data.password}
          onChange={changeHandler}
          hint={passwordHint}
        />

        <div className="Buttons">
          <Button label="Clear" onClick={clearFields} />
          <div className="Spacer" />
          <Button
            label="Sign Up"
            isDisabled={disableBtn}
            onClick={submitHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
