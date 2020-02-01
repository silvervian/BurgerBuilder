import React from "react";

import "./drawer-toggle.styles.scss";

const DrawerToggle = props => (
  <div onClick={props.clicked} className="drawer-toggle">
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
