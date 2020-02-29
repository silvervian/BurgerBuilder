import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/layout/layout.component";
import BurgerBuilder from "./containers/burger-builder/burger-builder.component";
import Checkout from "./containers/checkout/checkout.component";
import Orders from "./components/order/orders/orders.component";
import Auth from "./containers/auth/auth.component";
import Logout from "./containers/auth/logout/logout.component";
import * as actions from "./store/actions/index";

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          {this.props.isAuth ? (
            <Route path="/orders" component={Orders} />
          ) : null}
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
