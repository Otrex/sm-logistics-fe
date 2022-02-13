import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./auth/Login";
import { ProtectedRoute } from "@components/utility/ProtectedRoute";
import Dashboard from "./dashboard";
import { setTitle, urlPath } from "@app/utils";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import EmailVerify from "./auth/EmailVerify";
import Verified from "./auth/Verified";
import NotFound from "@components/pages/PageNotFound";
const url = urlPath("/client");

function Client() {
  setTitle("Client");
  return (
    <>
      <Router>
        <Switch>
          <Route exact component={Login} path={url("/login")} />
          <Route exact component={Register} path={url("/register")} />
          <Route
            exact
            component={ForgotPassword}
            path={url("/forgot-password")}
          />
          <Route
            exact
            component={ResetPassword}
            path={url("/reset-password/:token")}
          />
          <Route
            exact
            component={EmailVerify}
            path={url("/email-verify")}
          />
          <ProtectedRoute
            unlock={true}
            redirectTo={url("/email-verify")}
            path={url("/verified")}
            children={<Verified />}
          />
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
