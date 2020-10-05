import React, { useState, useEffect } from "react";
import CardQuestion from "../components/CardQuestion";

import Error from "../components/Error";
import Loading from "../components/Loading";
import Layout from "../components/Layout";

import { Redirect } from "react-router-dom";
import {
  useTriviaQuestions,
  useAnsweredQuestions,
} from "../context/questionContext";

import { useFetchQuestionsAPI } from "../services/questionService";
import { useProgressQuestion } from "../hooks/useProgressQuestion";

export default function Quiz({ url }) {
  const { triviaQuestions } = useTriviaQuestions();
  const [{ error, loading }, setURL] = useFetchQuestionsAPI();
  const { userAnswers, addUserAnswers } = useAnsweredQuestions();
  const { progressNextQuestion, questionIndexToAnswer } = useProgressQuestion();

  // controls the current question that would need to be answered move to hook!
  const [currentQuestion, setCurrentQuestion] = useState();

  // controls user access to the questions
  const [didCompleteQuestions, setDidCompleteQuestions] = useState(false);

  useEffect(() => {
    setURL(url);
  }, [setURL, url]);

  function questionWasAnswered(userAnswered) {
    // added user results to the completed question answered
    addUserAnswers([...userAnswers, userAnswered]);
  }

  useEffect(() => {
    setCurrentQuestion(triviaQuestions[questionIndexToAnswer]);
  }, [triviaQuestions, questionIndexToAnswer]);

  useEffect(() => {
    // checks for question length so when user complete will switch the quiz to complete
    if (
      questionIndexToAnswer >= triviaQuestions.length &&
      triviaQuestions.length !== 0
    ) {
      setDidCompleteQuestions(true);
    }
  }, [questionIndexToAnswer, triviaQuestions]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error link={{ name: "Try Again", location: "/" }} />;
  }
  if (didCompleteQuestions) {
    return <Redirect to="/QuizResults" />;
  }
  if (currentQuestion) {
    return (
      <Layout>
        <CardQuestion
          questionLength={triviaQuestions.length}
          questionId={questionIndexToAnswer + 1}
          questionWasAnswered={questionWasAnswered}
          quizQuestion={currentQuestion}
          progressQuestion={progressNextQuestion}
        />
      </Layout>
    );
  } else {
    return null;
  }
}
