// onclick on true , next question and should have return true,

// onclick on false, go to the next question and should have a register of false

import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { QuestionProvider } from "../context/questionContext";
import QuizResults from "../pages/QuizResults";
import { useAnsweredQuestions } from "../context/questionContext";

const DEMO_RESULTS = [
  {
    currentAskedQuestio: "Unturned originally started as a Roblox game.",
    userAnswer: "True",
    correctAnswer: "True",
    didAnswerCorrect: true,
  },
  {
    currentAskedQuestion:
      "Joseph Stalin&#039; s real name was Ioseb Bessarionis dze Dzugashvili.",
    userAnswer: "True",
    correctAnswer: "True",
    didAnswerCorrect: true,
  },
];

test("User Answered no question", async () => {
  const Wrapper = ({ children }) => (
    <QuestionProvider>{children} </QuestionProvider>
  );

  render(<QuizResults />, { wrapper: Wrapper });
  expect(screen.getByText(/Did not complete test/i)).toBeInTheDocument();
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
