import React from "react";

import Modal from "../../components/ui/modal/modal.component";
import Aux from "../auxillary/auxillary.component";
import useHttpErrorHandler from "../../hooks/http-error-handler.hook";

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <Aux>
        <Modal show={error} modalClosed={clearError}>
          {error && error.message}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};
export default withErrorHandler;
