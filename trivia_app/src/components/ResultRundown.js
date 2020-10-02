import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import emoji from "react-easy-emoji";

import ShowCorrectValue from "./ShowCorrectValue";

// separate into own component
const listItem = css`
  display: flex;
  flex-flow: column;
  margin: 30px 0;
`;
const ResultRundown = ({ userSubmittal }) => {
  const {
    question,
    isCorrectAnswer,
    userAnswer,
    correct_answer,
  } = userSubmittal;
  return (
    <li css={listItem}>
      <p style={{ margin: "0" }}>
        <span style={{ marginRight: "5px" }}>
          {isCorrectAnswer ? emoji("✅") : emoji("❌")}
        </span>
        {question}
      </p>

      <p
        style={{
          fontWeight: "250",
          margin: "0 0 0 30px",
          margin: "15px 0px 0px 30px",
        }}
      >
        Your Answer :{" "}
        <span
          style={{
            fontWeight: "900",
            color: `${isCorrectAnswer ? "rgb(119, 178, 85)" : "#dd2e44"}`,
          }}
        >
          {userAnswer}
        </span>
      </p>
      {isCorrectAnswer ? null : (
        <ShowCorrectValue correct_answer={correct_answer} />
      )}
    </li>
  );
};

export default ResultRundown;
