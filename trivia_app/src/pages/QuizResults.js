import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import emoji from "react-easy-emoji";
import {
  useAnsweredQuestions,
  useTriviaQuestions,
} from "../context/questionContext";

import { Redirect } from "react-router-dom";

import Layout from "../components/Layout";
import LinkButton from "../components/LinkButton";
import ContentCard from "../components/ContentCard";

const resultsList = css`
  list-style: none;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export default function QuizResults() {
  const { setTriviaQuestions } = useTriviaQuestions();
  const { userAnswers, addUserAnswers } = useAnsweredQuestions();

  const [totalCorrect, setTotalCorrect] = useState();
  let history = useHistory();

  function resetQuestions() {
    setTriviaQuestions([]);
    addUserAnswers([]);
    setTotalCorrect();
  }

  useEffect(() => {
    const correctAnswered = userAnswers.filter(
      (userInput) => userInput.isCorrectAnswer === true
    );
    setTotalCorrect(correctAnswered.length);
  }, [userAnswers, totalCorrect]);

  if (userAnswers.length === 0) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <ContentCard>
        <h2>Results of test</h2>
        <p>
          YOU SCORED {totalCorrect} / {userAnswers.length}
        </p>

        <ul css={resultsList}>
          {userAnswers.map((userSubmittal) => {
            return <ResultRundown userSubmittal={userSubmittal} />;
          })}
        </ul>
        <button onClick={resetQuestions}>TEST</button>
        <LinkButton
          onClick={resetQuestions}
          link={{ name: "Play Again", location: "/" }}
        />
      </ContentCard>
    </Layout>
  );
}

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
        {isCorrectAnswer ? null : (
          <span style={{ marginLeft: "50px", fontWeight: "900" }}>
            Correct Answer: {correct_answer}
          </span>
        )}
      </p>
    </li>
  );
};
