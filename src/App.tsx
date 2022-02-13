import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Rider from "@pages/rider";
import Client from "@pages/client";
import Landing from "@pages/landing";
import Admin from "@pages/admin";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/client*" component={Client} />
          <Route exact path="/admin*" component={Admin} />
          <Route exact path="/rider*" component={Rider} />
          <Route exact path="/*" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
