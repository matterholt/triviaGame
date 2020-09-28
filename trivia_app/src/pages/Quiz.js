import React, { useState, useEffect } from "react";
import CardQuestion from "../components/CardQuestion";
import { Redirect } from "react-router-dom";

import { useCountState } from "../context/questionContext";

export default function Quiz() {
  const trivialQuestions = useCountState();

  // controls the current question that would need to be answered
  const [currentQuestion, setCurrentQuestion] = useState(trivialQuestions[0]);
  const [questionToAnswer, nextQuestionToAnswer] = useState(0);

  // answer that user has submitted
  const [questionAnswer, updateQuestionAnswer] = useState([]);

  // controlling the rendering of component
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // controls user access to the questions
  const [didCompleteQuestions, setDidCompleteQuestions] = useState(false);

  function questionWasAnswered(userAnswered) {
    // added user results to the completed question answered
    updateQuestionAnswer([...questionAnswer, userAnswered]);
  }

  useEffect(() => {
    // set the first question
    if (questionToAnswer < trivialQuestions.length) {
      setCurrentQuestion(trivialQuestions[questionToAnswer]);
    } else {
      setDidCompleteQuestions(true);
    }
  }, [trivialQuestions, questionToAnswer]);

  function progressQuestion() {
    nextQuestionToAnswer(questionToAnswer + 1);
  }
  if (didCompleteQuestions) {
    return <Redirect to="/QuizResults" />;
  } else {
    return (
      <div>
        {`Question ${questionToAnswer + 1} of ${trivialQuestions.length}`}
        <CardQuestion
          questionWasAnswered={questionWasAnswered}
          quizQuestion={currentQuestion}
          progressQuestion={progressQuestion}
        />
      </div>
    );
  }
}
