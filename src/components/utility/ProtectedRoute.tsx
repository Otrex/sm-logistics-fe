import React from "react";
import { Redirect, Route } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.FC | React.CElement<any, any>;
  redirectTo?: string;
  unlock: boolean;
  [key: string]: any;
};

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children, redirectTo, unlock, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return unlock === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectTo || "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
