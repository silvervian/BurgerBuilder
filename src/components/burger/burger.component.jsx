import React from "react";

import BurgerIngredient from "./burger-ingredient/burger-ingredient.component";

import "./burger.styles.scss";

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    console.log([...Array(props.ingredients[igKey])]);
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
