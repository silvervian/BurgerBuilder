import React from "react";

import "./button.styles.scss";

const Button = props => (
  <button
    className={`button ${props.btnType}`}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
