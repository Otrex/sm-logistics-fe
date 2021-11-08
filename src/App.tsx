import React from "react";
import Test from "@pages/Test";
import "@styles/global.css";

import { 
  BrowserRouter as Router, 
  Redirect, 
  Route, 
  Switch 
} from 'react-router-dom';


function App() {
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

export default App;
