import React from 'react';
import Test from '@pages/Test';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

function Rider() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default Rider;
