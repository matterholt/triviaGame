import React from "react";
import {
  useAnsweredQuestions,
  useTriviaQuestions,
} from "../context/questionContext";
import { Link, Redirect } from "react-router-dom";

export default function QuizResults() {
  const { setTriviaQuestions } = useTriviaQuestions();
  const { userAnswers, addUserAnswers } = useAnsweredQuestions();

  function resetQuestions() {
    setTriviaQuestions([]);
    addUserAnswers([]);
  }

  const correctAnswered = userAnswers.filter(
    (userInput) => userInput.userAnswer === "correct"
  );
  if (userAnswers.length === 0) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h2>Results of test</h2>
      <p>
        YOU SCORED {correctAnswered.length} / {userAnswers.length}
      </p>
      <ul>
        {userAnswers.map((userSubmittal) => {
          return (
            <li>
              <p>THE Question: {userSubmittal.question}</p>
              <p>Your Answer: {userSubmittal.userAnswer}</p>
            </li>
          );
        })}
      </ul>
      <Link onClick={resetQuestions} to="/Quiz">
        Play Again
      </Link>
      <Link onClick={resetQuestions} to="/">
        Home
      </Link>
    </div>
  );
}
