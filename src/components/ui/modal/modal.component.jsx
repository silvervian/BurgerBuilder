import React from "react";

import Aux from "../../../hoc/auxillary/auxillary.component";
import Backdrop from "../../ui/backdrop/backdrop.component";

import "./modal.styless.scss";

const Modal = props => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== props.show ||
  //     nextProps.children !== this.props.children
  //   );
  // }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
