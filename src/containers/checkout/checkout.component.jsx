import React from "react";
import { Route } from "react-router-dom";

import ContactData from "./contact-data/contact-data.component";
import CheckoutSummary from "../../components/order/checkout-summary/checkout-summary.component";

class Checkout extends React.Component {
  state = {
    ingredients: {}
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      // ['salad','1']
      console.log(param);
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          CheckoutCancelled={this.checkoutCancelledHandler}
          CheckoutContinue={this.checkoutContinueHandler}
        />
        <Route
          path={`${this.props.match.path}/contact-data`}
          component={ContactData}
        />
      </div>
    );
  }
}

export default Checkout;
