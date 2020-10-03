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

export default function Quiz() {
  const { triviaQuestions } = useTriviaQuestions();
  const [{ error, loading }] = useFetchQuestionsAPI();

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
    setCurrentQuestion(triviaQuestions[questionToAnswer]);
  }, [triviaQuestions, questionToAnswer]);

  useEffect(() => {
    if (questionToAnswer >= 10) {
      setDidCompleteQuestions(true);
    }
  }, [questionToAnswer]);

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
          questionId={questionToAnswer + 1}
          questionWasAnswered={questionWasAnswered}
          quizQuestion={currentQuestion}
          progressQuestion={progressQuestion}
        />
      </Layout>
    );
  } else {
    return null;
  }
}
