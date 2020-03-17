import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Aux from "../../hoc/auxillary/auxillary.component";
import Burger from "../../components/burger/burger.component";
import BuildControls from "../../components/burger/build-controls/build-controls.component";
import Modal from "../../components/ui/modal/modal.component";
import OrderSummary from "../../components/order-summary/order-summary.component";
import Spinner from "../../components/ui/spinner/spinner.component";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";

const BurgerBuilder = props => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const ings = useSelector(state => state.burgerBuilder.ingredients)
  const price = useSelector(state => state.burgerBuilder.totalPrice)
  const error = useSelector(state => state.burgerBuilder.error)
  const isAuth = useSelector(state => state.auth.token !== null)

  const onIngredientAdded = ingName => dispatch(actions.addIngredient(ingName));
  const onIngredientRemoved = ingName => dispatch(actions.removeIngredient(ingName));
  const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), [dispatch]);
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetAuthRedirectPath = path => dispatch(actions.setAuthRedirectPath(path));

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (isAuth) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...ings
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

  if (ings) {
    burger = (
      <Aux>
        <Burger ingredients={ings} />
        <BuildControls
          isAuth={isAuth}
          ingredientAdded={onIngredientAdded}
          ingredientRemoved={onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(ings)}
          ordered={purchaseHandler}
          price={price}
        />
      </Aux>
    );
    orderSummary = (
      <OrderSummary
        ingredients={ings}
        price={price}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }
  // {salad: true, meat: false, ...}
  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
};

export default (withErrorHandler(BurgerBuilder, axios));
