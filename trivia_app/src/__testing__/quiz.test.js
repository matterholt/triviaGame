// onclick on true , next question and should have return true,

// onclick on false, go to the next question and should have a register of false

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Quiz from "../pages/Quiz";

test("Quiz Question Page", () => {
  render(<Quiz />);
  screen.debug();
});
