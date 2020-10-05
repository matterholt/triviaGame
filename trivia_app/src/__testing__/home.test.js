import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history"; // why need this?

import { Router } from "react-router-dom";

import App from "../App";

test("home page load", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(
    screen.getByText(/Welcome to the Trivia Challenge/i)
  ).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/begin/i), leftClick);
});
