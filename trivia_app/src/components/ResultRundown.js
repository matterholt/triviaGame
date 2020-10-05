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
    currentAskedQuestion,
    didAnswerCorrect,
    userAnswer,
    correctAnswer,
  } = userSubmittal;
  return (
    <li css={listItem}>
      <p style={{ margin: "0" }}>
        <span style={{ marginRight: "5px" }}>
          {didAnswerCorrect ? emoji("✅") : emoji("❌")}
        </span>
        {currentAskedQuestion}
      </p>

      <p
        style={{
          fontWeight: "250",
          margin: "15px 0px 0px 30px",
        }}
      >
        Your Answer :{" "}
        <span
          style={{
            fontWeight: "900",
            color: `${didAnswerCorrect ? "rgb(119, 178, 85)" : "#dd2e44"}`,
          }}
        >
          {userAnswer}
        </span>
      </p>
      {didAnswerCorrect ? null : (
        <ShowCorrectValue correct_answer={correctAnswer} />
      )}
    </li>
  );
};

export default ResultRundown;
