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

import userEvent from "@testing-library/user-event"; //
import { QuestionProvider } from "../context/questionContext";
import Quiz from "../pages/Quiz";

const server = setupServer(
  rest.get("/questions", (req, res, ctx) => {
    return res(
      ctx.json({
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
      })
    );
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());

test("Loading of data", async () => {
  render(
    <QuestionProvider>
      <Quiz url="/questions" />
    </QuestionProvider>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("questions for user", async () => {
  render(
    <QuestionProvider>
      <Quiz url="/questions" />
    </QuestionProvider>
  );
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  expect(screen.getByText(/question/i)).toHaveTextContent("Question: 1/1");

  expect(screen.getByRole("heading")).toHaveTextContent(
    "Entertainment: Video Games"
  );

  expect(screen.getByRole("button", { name: /true/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /false/i })).toBeInTheDocument();

  // once click redirect to next page
});
