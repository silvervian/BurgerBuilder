import React from "react";

import Order from "../order.component";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

import "./orders.styles.scss";

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({ ...res.data[key], id: key });
        }
        console.log(res.data);
        this.setState({ loading: true, orders: fetchOrders });
      })
      .catch(err => {
        this.setState({ loading: true });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
