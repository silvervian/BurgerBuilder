import React from "react";

import "./input.styles.scss";

const Input = props => {
  let inputElement = null;

  const isFormValid = () => {
    return props.invalid && props.shouldValidate && props.touched
      ? "invalid"
      : "";
  };

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={`input-element ${isFormValid()}`}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={`input-element ${isFormValid()}`}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={`input-element ${isFormValid()}`}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className="input-element"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }

  return (
    <div className="input">
      <label className="label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
