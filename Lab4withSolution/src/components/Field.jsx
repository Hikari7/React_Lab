import React from "react";

export default class Field extends React.Component {
  render() {
    const { label, onChange, type, value, hint } = this.props;
    return (
      <div className="Field">
        <div className="Field__Label">{this.props.label}</div>
        {type === "password" ? (
          <input
            className="Field__Input"
            name={label}
            onChange={onChange}
            type="password"
            value={value}
          />
        ) : (
          <input
            className="Field__Input"
            name={label}
            onChange={onChange}
            type="text"
            value={value}
          />
        )}
        {!!hint && <div className="Field__HelperMessage">{hint}</div>}
      </div>
    );
  }
}
