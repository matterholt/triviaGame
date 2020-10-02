import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useHistory } from "react-router-dom";

import {
  useAnsweredQuestions,
  useTriviaQuestions,
} from "../context/questionContext";

import Layout from "../components/Layout";
import LinkButton from "../components/LinkButton-try";
import ContentCard from "../components/ContentCard";

import ResultRundown from "../components/ResultRundown";

const resultsListContainer = css`
  list-style: none;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export default function QuizResults() {
  const { setTriviaQuestions } = useTriviaQuestions();
  const { userAnswers, addUserAnswers } = useAnsweredQuestions();
  const [totalCorrect, setTotalCorrect] = useState();

  const history = useHistory();

  function resetQuestions() {
    setTriviaQuestions([]);
    addUserAnswers([]);
    setTotalCorrect();
    history.push("/");
  }

  useEffect(() => {
    const correctAnswered = userAnswers.filter(
      (userInput) => userInput.isCorrectAnswer === true
    );
    setTotalCorrect(correctAnswered.length);
  }, [userAnswers, totalCorrect]);

  if (userAnswers.length === 0) {
    return (
      <Layout>
        <ContentCard>
          <h2>Did not complete test</h2>
          <LinkButton pathAction={resetQuestions} pathName="Home" />
        </ContentCard>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <ContentCard>
          <h2>Results of test</h2>
          <p>
            YOU SCORED {totalCorrect} / {userAnswers.length}
          </p>

          <ul css={resultsListContainer}>
            {userAnswers.map((userSubmittal) => {
              return <ResultRundown userSubmittal={userSubmittal} />;
            })}
          </ul>
          <LinkButton pathAction={resetQuestions} pathName="Home" />
        </ContentCard>
      </Layout>
    );
  }
}
