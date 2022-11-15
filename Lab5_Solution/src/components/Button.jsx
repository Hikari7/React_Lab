import React from "react";

export default function Button({ isDisabled, onClick, label }) {
  //disabled属性が{isDisabled}でtrueになった時とfalseになった時でスタイリングの切替がされる...！

  return (
    <button className="Button" disabled={isDisabled} onClick={onClick}>
      <div className="Button__Label">{label}</div>
    </button>
  );
}
