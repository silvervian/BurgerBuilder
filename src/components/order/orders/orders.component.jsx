import React from "react";
import { connect } from "react-redux";

import Order from "../order.component";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as action from "../../../store/actions/index";
import Spinner from "../../ui/spinner/spinner.component";

import "./orders.styles.scss";

class Orders extends React.Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: token => dispatch(action.fetchOrders(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
