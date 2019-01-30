import React from "react";
import { ErrorStyles } from "./styles";
import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {error}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message}
      </p>
    </ErrorStyles>
  );
};

ErrorMessage.defaultProps = {
  error: {}
};

ErrorMessage.propTypes = {
  error: PropTypes.object
};

export default ErrorMessage;
