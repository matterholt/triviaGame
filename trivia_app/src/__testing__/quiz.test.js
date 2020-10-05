// onclick on true , next question and should have return true,

// onclick on false, go to the next question and should have a register of false

import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { QuestionProvider } from "../context/questionContext";

import {
  useTriviaQuestions,
  useAnsweredQuestions,
} from "../context/questionContext";

import Quiz from "../pages/Quiz";

// make a mock server

test("Question Consumer default", async () => {
  render(
    <QuestionProvider>
      <Quiz />
    </QuestionProvider>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  expect(screen.getByText(/Question/i)).toBeInTheDocument();
  screen.debug();
});
