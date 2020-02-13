import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation-item.styles.scss";

const NavigationItem = props => (
  <li className="navigation-item">
    <NavLink to={props.link} activeClassName="active" exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
