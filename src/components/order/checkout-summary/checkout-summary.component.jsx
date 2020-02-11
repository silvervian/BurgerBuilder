import React from "react";

import Burger from "../../burger/burger.component";
import Button from "../../ui/button/button.component";

import "./checkout-summary.styles.scss";

const CheckoutSummary = props => {
  return (
    <div className="checkout-summary">
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button btnType="danger" clicked={props.CheckoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="success" clicked={props.CheckoutContinue}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
