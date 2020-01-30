import React from "react";

import "./button.styles.scss";

const Button = props => (
  <button className={`button ${props.btnType}`} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
