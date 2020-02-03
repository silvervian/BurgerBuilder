import React from "react";

import Layout from "./hoc/layout/layout.component";
import BurgerBuilder from "./containers/burger-builder/burger-builder.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder></BurgerBuilder> : null
        </Layout>
      </div>
    );
  }
}

export default App;
