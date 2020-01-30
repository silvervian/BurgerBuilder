import React from "react";

import Aux from "../../hoc/auxillary.component";
import Toolbar from "../navigation/toolbar/toolbar.component";

import "./layout.styles.scss";

const Layout = props => (
  <Aux>
    <Toolbar />
    <main className="content">{props.children}</main>
  </Aux>
);

export default Layout;
