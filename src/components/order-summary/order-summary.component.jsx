import React from "react";

import Button from "../ui/button/button.component";

import Aux from "../../hoc/auxillary.component";

const OrderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Burger</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType="danger">CANCEL</Button>
      <Button btnType="success">CONTINUE</Button>
    </Aux>
  );
};

export default OrderSummary;
