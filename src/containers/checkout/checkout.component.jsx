import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactData from "./contact-data/contact-data.component";
import CheckoutSummary from "../../components/order/checkout-summary/checkout-summary.component";

const Checkout = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };
  const checkoutContinueHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  let summary = <Redirect to="/" />;
  if (props.ings) {
    const purchasedRidirect = props.purchased && (
      <Redirect to="/" />
    )
    summary = (
      <React.Fragment>
        {purchasedRidirect}
        <CheckoutSummary
          ingredients={props.ings}
          CheckoutCancelled={checkoutCancelledHandler}
          CheckoutContinue={checkoutContinueHandler}
        />
        <Route
          path={`${props.match.path}/contact-data`}
          component={ContactData}
        />
      </React.Fragment>
    );
  }
  return summary;
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
