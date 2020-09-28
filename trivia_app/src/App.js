import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";

import { QuestionProvider } from "./context/questionContext";

// create routing file for all routes, (might be easier to manage??)

function App() {
  return (
    <QuestionProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Quiz">
            <Quiz />
          </Route>
          <Route exact path="/QuizResults">
            <QuizResults />
          </Route>
        </Switch>
      </Router>
    </QuestionProvider>
  );
}

export default App;
