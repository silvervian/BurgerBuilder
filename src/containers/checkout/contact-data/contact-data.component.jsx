import React from "react";
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

  render() {
    return (
      <div className="contact-data">
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" id="" placeholder="Your Name" />
          <input type="email" name="email" id="" placeholder="Email" />
          <input type="text" name="street" id="" placeholder="Street" />
          <input type="text" name="zip" id="" placeholder="Zip Code" />
          <Button btnType="success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
