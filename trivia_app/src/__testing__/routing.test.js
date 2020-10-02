import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useHistory } from "react-router-dom";
import { createMemoryHistory } from "history"; // why need this?

import { Router } from "react-router-dom";

import App from "../App";

test("setup", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  screen.debug();
  expect(
    screen.getByText(/Welcome to the Trivia Challenge/i)
  ).toBeInTheDocument();
  // const link = screen.getByText(/Begin/i);

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/begin/i), leftClick);

  screen.debug();
});
