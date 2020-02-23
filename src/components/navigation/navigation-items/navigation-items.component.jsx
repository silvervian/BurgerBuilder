import React from "react";

import NavigationItem from "./navigation-item/navigation-item.component";

import "./navigation-items.styles.scss";

const NavigationItems = props => (
  <nav>
    <ul className="navigation-items">
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/auth">Authentication</NavigationItem>
    </ul>
  </nav>
);

export default NavigationItems;
