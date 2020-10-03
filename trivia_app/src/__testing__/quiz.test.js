// onclick on true , next question and should have return true,

// onclick on false, go to the next question and should have a register of false

import React from "react";
import { render, screen } from "@testing-library/react";
import { QuestionProvider } from "../context/questionContext";

import {
  useTriviaQuestions,
  useAnsweredQuestions,
} from "../context/questionContext";

import Quiz from "../pages/Quiz";

test("Question Consumer default", () => {
  render(
    <QuestionProvider>
      <Quiz />
    </QuestionProvider>
  );
  screen.debug();
});
