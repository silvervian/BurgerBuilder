import React from "react";

import Aux from "../../hoc/auxillary.component";
import Burger from "../../components/burger/burger.component";

class BurderBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurderBuilder;
