import React from "react";

import Logo from "../../logo/logo.component";
import NavigationItems from "../navigation-items/navigation-items.component";
import DrawerToggle from "../side-drawer/drawer-toggle/drawer-toggle.component";

import "./toolbar.styles.scss";

const Toolbar = props => (
  <header className="toolbar">
    <DrawerToggle clicked={props.drowerToggleClicked} />
    <Logo />
    <NavigationItems />
  </header>
);

export default Toolbar;
