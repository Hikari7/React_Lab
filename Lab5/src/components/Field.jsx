import React, { useState, useRef } from "react";

export default function Field({ label, setValues, type, setDisabled }) {
  const handleChange = (e) => {
    e.preventDefault();
    setValues(e.target.value);

    if (setValues.email !== "" && setValues.password !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //console.log(label);
  return (
    <div className="Field">
      <div className="Field__Label">{label}</div>
      {type === "password" ? (
        <input
          className="Field__Input"
          name={label}
          onChange={handleChange}
          type="password"
        />
      ) : (
        <input
          className="Field__Input"
          name={label}
          onChange={handleChange}
          type="text"
        />
      )}

      {/* {!!hint && <div className="Field__HelperMessage">{hint}</div>} */}
    </div>
  );
}

