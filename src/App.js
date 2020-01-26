import React from "react";

import Layout from "./components/layout/layout.component.jsx";
import BurgerBuilder from "./containers/burger-builder/burger-builder.component";

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
