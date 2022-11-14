import React, { useState, useRef } from "react";

export default function Field({ label, setValues, type }) {
  // changeHandler = (e) => {
  //   // console.log(evt);
  //   const { name, value } = e.target;

  //   //もしフォームが空じゃなかったら
  //   if (setValues.email !== "" && setValues.password !== "") {
  //     isDisabled({ disableBtn: false });
  //   } else {
  //     isDisabled({ disableBtn: true });
  //   }

  //   //console.log("updating on" + [name]);
  //   //[name]でもっとダイナミックにemailかpasswordのvalueを判断できる
  //   // setValues({ [name]: value });
  //   setValues({ email });
  // };

  const handleChange = (e) => {
    e.preventDefault();
    setValues(e.target.value);
  };

  console.log(label);
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

// import React from "react";

// export default class Field extends React.Component {
//   render({}) {
//     // const { label, onChange, type, value, hint } = this.props;
//     return (
//       <div className="Field">
//         <div className="Field__Label">{label}</div>
//         {/* ternary operator --> condition ? true : false */}
//         {type === "password" ? (
//           <input
//             className="Field__Input"
//             name={label}
//             onChange={onChange}
//             type="password"
//             value={value}
//           />
//         ) : (
//           <input
//             className="Field__Input"
//             name={label}
//             onChange={onChange}
//             type="text"
//             value={value}
//           />
//         )}
//         {!!hint && <div className="Field__HelperMessage">{hint}</div>}
//       </div>
//     );
//   }
// }
