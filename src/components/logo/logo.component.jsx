import React from "react";

import BurgerLogo from "../../assets/images/burger-logo.png";

import "./logo.styles.scss";

const Logo = props => (
  <div className="logo">
    <img src={BurgerLogo} alt="MyBurger"></img>
  </div>
);

export default Logo;
