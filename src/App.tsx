import React from 'react';
import Test from '@pages/Test';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Rider from '@pages/rider';
import Client from '@pages/client';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Rider}/> */}
          <Route exact path="/client*" component={Client} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
      <Test title={'Treasure'} />
    </>
  );
}

export default App;
