import React from "react";

import Logo from "../../logo/logo.component";
import NavigationItems from "../../navigation/navigation-items/navigation-items.component";
import Backrop from "../../ui/backdrop/backdrop.component";
import Aux from "../../../hoc/auxillary/auxillary.component";

import "./side-drawer.styles.scss";

const SideDrawer = props => {
  return (
    <Aux>
      <Backrop show={props.open} clicked={props.closed} />
      <div className={`side-drawer  ${props.open ? "open" : "close"}`}>
        <Logo />
        <NavigationItems isAuth={props.isAuth} />
      </div>
    </Aux>
  );
};

export default SideDrawer;
