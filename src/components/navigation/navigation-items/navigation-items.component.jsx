import React from "react";

import NavigationItem from "./navigation-item/navigation-item.component";

import "./navigation-items.styles.scss";

const NavigationItems = props => (
  <nav>
    <ul className="navigation-items">
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {props.isAuth ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {!props.isAuth ? (
        <NavigationItem link="/auth">Authentication</NavigationItem>
      ) : (
        <NavigationItem link="/logout">Logout</NavigationItem>
      )}
    </ul>
  </nav>
);

export default NavigationItems;
