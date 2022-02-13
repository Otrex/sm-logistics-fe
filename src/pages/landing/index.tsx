import { setTitle, urlPath } from "@app/utils";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Partner from "./Partner";
import Support from "./Support";
import Terms from "./Terms";

const url = urlPath("/h");

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

function Landing() {
  setTitle("Welcome User");
  return (
    <>
      <Router>
        <Switch>
          <Route exact component={Home} path={url("/")} />
          <Route exact component={About} path={url("/about")} />
          <Route exact component={Support} path={url("/support")} />
          <Route exact component={Partner} path={url("/partner")} />
          <Route
            exact
            component={Terms}
            path={url("/terms-of-use")}
          />
          <Route exact path={url("/*")} children={<NotFound />} />
        </Switch>
      </Router>
    </>
  );
}

export default Landing;
