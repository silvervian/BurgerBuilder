import React from "react";

import Aux from "../../hoc/auxillary.component";

import "./layout.styles.scss";

const Layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="content">{props.children}</main>
  </Aux>
);

export default Layout;
