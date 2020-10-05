// onclick on true , next question and should have return true,

// onclick on false, go to the next question and should have a register of false

import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { QuestionProvider } from "../context/questionContext";

import Quiz from "../pages/Quiz";

const example = {
  response_code: 0,
  results: [
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question: "Unturned originally started as a Roblox game.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
  ],
};

const server = setupServer(
  rest.get("/questions", (req, res, ctx) => {
    return res(ctx.json({ quizQuestion: example }));
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());

// make a mock server

test("Question Consumer default", async () => {
  render(
    <QuestionProvider>
      <Quiz />
    </QuestionProvider>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  expect(screen.getByText(/question/i)).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();
  screen.debug();
});
