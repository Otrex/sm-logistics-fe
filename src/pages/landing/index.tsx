import { urlPath } from "@app/utils";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import About from "./about";
import Home from "./home";
import Partner from "./partner";
import Support from "./support";
import Terms from "./terms";

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
