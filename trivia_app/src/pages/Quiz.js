import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import CardQuestion from "../components/CardQuestion";

import { Redirect } from "react-router-dom";
import {
  useTriviaQuestions,
  useAnsweredQuestions,
} from "../context/questionContext";

import { useFetchQuestionsAPI } from "../services/questionService";

export default function Quiz() {
  const { triviaQuestions } = useTriviaQuestions(); // might not need this context

  const [{ questionList, error, loading }, setURL] = useFetchQuestionsAPI();

  const { userAnswers, addUserAnswers } = useAnsweredQuestions();

  // controls the current question that would need to be answered move to hook!
  const [currentQuestion, setCurrentQuestion] = useState();
  const [questionToAnswer, nextQuestionToAnswer] = useState(0);

  // controls user access to the questions
  const [didCompleteQuestions, setDidCompleteQuestions] = useState(false);

  function questionWasAnswered(userAnswered) {
    // added user results to the completed question answered
    addUserAnswers([...userAnswers, userAnswered]);
  }
  function progressQuestion() {
    nextQuestionToAnswer(questionToAnswer + 1);
  }

  useEffect(() => {
    setCurrentQuestion(questionList[questionToAnswer]);
  }, [questionList, questionToAnswer]);

  useEffect(() => {
    if (questionToAnswer >= 10) {
      setDidCompleteQuestions(true);
    }
  }, [questionToAnswer]);

  if (loading) {
    return <h1>Loading..</h1>;
  }
  if (error) {
    return <h1>ERROr..</h1>;
  }
  if (didCompleteQuestions) {
    return <Redirect to="/QuizResults" />;
  }

  const style = css`
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
  `;

  if (currentQuestion) {
    return (
      <div css={style}>
        <CardQuestion
          questionLength={questionList.length}
          questionId={questionToAnswer + 1}
          questionWasAnswered={questionWasAnswered}
          quizQuestion={currentQuestion}
          progressQuestion={progressQuestion}
        />
      </div>
    );
  } else {
    return <h1>No TEST</h1>;
  }
}
