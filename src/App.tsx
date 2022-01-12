import React from "react";
import Test from "@pages/Test";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Rider from "@pages/rider";
import Client from "@pages/client";
import Landing from "@pages/landing";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/client*" component={Client} />
          <Route exact path="/rider*" component={Rider} />
          <Route exact path="/*" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
