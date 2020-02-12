import React from "react";
import axios from "../../../axios-orders";

import Spinner from "../../../components/ui/spinner/spinner.component";
import Button from "../../../components/ui/button/button.component";

import "./contact-data.styles.scss";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      ZipCode: ""
    }
  };

  orderHandler = event => {
    event.preventDefault();
    console.log("cze", this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Max Schwarzmüller",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "Germany"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Email" />
        <input type="text" name="street" id="" placeholder="Street" />
        <input type="text" name="zip" id="" placeholder="Zip Code" />
        <Button btnType="success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="contact-data">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
