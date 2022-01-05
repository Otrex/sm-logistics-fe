import React from "react";
import Test from "@pages/Test";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./auth/Login";
import { ProtectedRoute } from "@components/utility/ProtectedRoute";
import Dashboard from "./dashboard";
import { urlPath } from "@app/utils";
import Register from "./auth/Register";
const url = urlPath("/client");

const NotFound = () => {
  return (
    <div className="flex center h-full">
      <div className="text-center">
        <h1>Page Not Found</h1>
        <span style={{ fontSize: "80px" }}>404</span>
      </div>
    </div>
  );
};

function Client() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact component={Login} path={url("/login")} />
          <Route exact component={Register} path={url("/register")} />
          <ProtectedRoute
            unlock={true}
            redirectTo={url()}
            path={url("/dashboard*")}
            children={<Dashboard />}
          />
          {/* 404 Page */}
          <Route exact path={url("/*")} children={<NotFound />} />
        </Switch>
      </Router>
    </>
  );
}

export default Client;
