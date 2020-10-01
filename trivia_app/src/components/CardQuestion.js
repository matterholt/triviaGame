import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import ButtonContainer from "./ButtonContainer";

const style = css`
  display: flex;
  flex-flow: column;
  width: 35%;
  height: 60vh;
  font-size: 2rem;
  color: var(--main-Color-dark);
  border: solid 5px var(--main-Color-light);
  padding: 15px;
  border-radius: 10px;
  line-height: 30px;
  background-color: white;
`;
const container = css`
  display: grid;
  height: 150px;
`;
const title = css`
  background-color: var(--main-background);
  margin: 20px 0;
  color: var(--main-Color-dark);
`;

// think will break this up and add all to the quiz component??
const CardQuestion = ({
  questionId,
  questionLength,
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
    <div key={questionId} css={style}>
      <p>Question: {questionId}</p>
      <h2 css={[container, title]}>{category}</h2>
      <div css={container}>{question}</div>

      <ButtonContainer checkCorrectAnswer={checkCorrectAnswer} />
      {/* {`Question ${questionId} of ${questionLength}`} */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginTop: "25px",
        }}
      >
        <CircleSVG />
        <CircleSVG />
        <CircleSVG />
        <CircleSVG />
        <CircleSVG />
        <CircleSVG />
        <CircleSVG />
        <CircleSVG />
      </div>
    </div>
  );
};

export default CardQuestion;

const tempCircle = css`
  border-radius: 100%;
  height: 20px;
  width: 20px;
  border: solid 2px var(--main-Color-light);
`;
const CircleSVG = () => {
  return <div css={tempCircle}></div>;
};
