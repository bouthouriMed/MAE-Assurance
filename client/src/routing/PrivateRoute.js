import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

export default function ({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  return (
    <Route
    {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
