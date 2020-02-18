import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactData from "./contact-data/contact-data.component";
import CheckoutSummary from "../../components/order/checkout-summary/checkout-summary.component";

class Checkout extends React.Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRidirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <React.Fragment>
          {purchasedRidirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            CheckoutCancelled={this.checkoutCancelledHandler}
            CheckoutContinue={this.checkoutContinueHandler}
          />
          <Route
            path={`${this.props.match.path}/contact-data`}
            component={ContactData}
          />
        </React.Fragment>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
