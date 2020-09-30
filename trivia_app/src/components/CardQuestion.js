import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import ButtonContainer from "./ButtonContainer";

const style = css`
  display: flex;
  flex-flow: column;
  width: 25%;
  margin: 15px;
  font-size: 2rem;
`;
const questionContainer = css``;

const CardQuestion = ({
  qId,
  questionWasAnswered,
  quizQuestion,
  progressQuestion,
}) => {
  const { category, question, correct_answer } = quizQuestion;

  function checkCorrectAnswer(e) {
    const userAnswer = e.target.value;
    if (userAnswer === correct_answer) {
      questionWasAnswered({
        question: [question],
        userAnswer: "correct",
      });
      progressQuestion();
    } else {
      questionWasAnswered({
        question: [question],
        userAnswer: "wrong",
      });
      progressQuestion();
    }
  } // custom hook useReducer

  return (
    <div key={qId} css={style}>
      <h2>{category}</h2>
      <div css={questionContainer}>{question}</div>
      <ButtonContainer checkCorrectAnswer={checkCorrectAnswer} />
    </div>
  );
};

export default CardQuestion;
