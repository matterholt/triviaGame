import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

// create routing file for all routes, (might be easier to manage??)

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Quiz">
          <Quiz />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
