import * as actionsTypes from "../actions/actionsTypes";
import { updateObject } from "./utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (state, action) => {
  return updateObject(state, {
    purchased: false
  });
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, {
    id: action.orderId
  });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const purchaseBurgerFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false
  });
};

const fetchBurgerStart = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const fetchBurgerFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionsTypes.FETCH_ORDERS_FAIL:
      return fetchBurgerFail(state, action);
    case actionsTypes.FETCH_ORDERS_START:
      return fetchBurgerStart(state, action);
    case actionsTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionsTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionsTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionsTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    default:
      return {
        ...state
      };
  }
};

export default reducer;
