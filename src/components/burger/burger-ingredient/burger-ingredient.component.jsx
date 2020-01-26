import React from "react";
import PropTypes from "prop-types";

import "./burger-ingredients.styles.scss";

const BurgerIngredients = props => {
  switch (props.type) {
    case "bread-bottom":
      return <div className="bread-bottom"></div>;
    case "bread-top":
      return (
        <div className="bread-top">
          <div className="seeds1"></div>
          <div className="seeds2"></div>
        </div>
      );
    case "meat":
      return <div className="meat"></div>;
    case "cheese":
      return <div className="cheese"></div>;
    case "salad":
      return <div className="salad"></div>;
    case "bacon":
      return <div className="bacon"></div>;
    default:
      return null;
  }
};

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredients;
