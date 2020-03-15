import React, { useEffect, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/layout/layout.component";
import BurgerBuilder from "./containers/burger-builder/burger-builder.component";
import Logout from "./containers/auth/logout/logout.component";
import * as actions from "./store/actions/index";

const Orders = React.lazy(() =>
  import("./components/order/orders/orders.component")
);

const Checkout = React.lazy(() =>
  import("./containers/checkout/checkout.component")
);

const Auth = React.lazy(() => import("./containers/auth/auth.component"));

const App = props => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, [props]);

  let routes = (
    <Switch>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </React.Suspense>
    </Switch>
  );
  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        {props.isAuth ? <Route path="/orders" component={Orders} /> : null}
        <Route path="/logout" exact component={Logout} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

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
