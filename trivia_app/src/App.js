import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import Routes from "./routes";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";

import { QuestionProvider } from "./context/questionContext";

// create routing file for all routes, (might be easier to manage??)

// if user goes back how to handle the history, or should
function App() {
  const [currentUrl, setCurrentURL] = useState();
  useEffect(() => {
    setCurrentURL(process.env.REACT_APP_STANDARD_QUESTIONS);
  }, [setCurrentURL]);
  return (
    <QuestionProvider>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Quiz">
          <Quiz url={currentUrl} />
        </Route>
        <Route exact path="/QuizResults">
          <QuizResults />
        </Route>
        <Route path="/" render={() => <div>404</div>} /> /
      </Routes>
    </QuestionProvider>
  );
}

export default App;
