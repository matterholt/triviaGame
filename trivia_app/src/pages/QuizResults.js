import React from "react";
import { useAnsweredQuestions } from "../context/questionContext";
import { Link } from "react-router-dom";

export default function QuizResults() {
  const { userAnswers } = useAnsweredQuestions();

  const correctAnswered = userAnswers.filter(
    (userInput) => userInput.userAnswer === "correct"
  );
  return (
    <div>
      <h2>Results of test</h2>
      <p>
        {" "}
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
      <Link to="/Quiz">Play Again</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
