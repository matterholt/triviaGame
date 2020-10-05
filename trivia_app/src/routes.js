import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

export default function Routes({ children }) {
  return (
    <Router>
      <Switch>{children}</Switch>
    </Router>
  );
}
