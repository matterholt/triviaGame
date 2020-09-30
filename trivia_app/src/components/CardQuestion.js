import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import ButtonContainer from "./ButtonContainer";

const style = css`
  display: flex;
  flex-flow: column;
  width: 35%;

  font-size: 2rem;
`;
const container = css`
  display: grid;
  place-items: center;
  background-color: var(--main-Color-dark);
  color: var(--main-Color-light);
  padding: 15px;
  border-radius: 10px;
  line-height: 30px;
`;
const title = css`
  background-color: var(--main-background);
  margin: 20px 0;
  color: var(--main-Color-dark);
`;

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
      <h2 css={[container, title]}>{category}</h2>
      <div css={container}>{question}</div>
      <ButtonContainer checkCorrectAnswer={checkCorrectAnswer} />
    </div>
  );
};

export default CardQuestion;
