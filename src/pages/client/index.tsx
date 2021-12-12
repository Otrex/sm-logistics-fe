import React from 'react';
import Test from '@pages/Test';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './auth/Login';

function Client() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default Client;
