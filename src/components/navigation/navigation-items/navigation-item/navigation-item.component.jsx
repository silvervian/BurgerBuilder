import React from "react";

import "./navigation-item.styles.scss";

const NavigationItem = props => (
  <li className="navigation-item">
    <a href={props.link} className={props.active ? "active" : null}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
