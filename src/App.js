import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/layout/layout.component";
import BurgerBuilder from "./containers/burger-builder/burger-builder.component";
import Checkout from "./containers/checkout/checkout.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
