import React from "react";

import NavigationItem from "./navigation-item/navigation-item.component";

import "./navigation-items.styles.scss";

const NavigationItems = props => (
  <nav>
    <ul className="navigation-items">
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  </nav>
);

export default NavigationItems;
