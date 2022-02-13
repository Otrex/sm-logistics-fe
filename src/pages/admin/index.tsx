import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./auth/Login";
import { ProtectedRoute } from "@components/utility/ProtectedRoute";
import Dashboard from "./dashboard";
import { setTitle, urlPath } from "@app/utils";
import NotFound from "@components/pages/PageNotFound";
const url = urlPath("/admin");

function Admin() {
  setTitle("Admin");
  return (
    <>
      <Router>
        <Switch>
          <Route exact component={Login} path={url("/login")} />

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

export default Admin;
