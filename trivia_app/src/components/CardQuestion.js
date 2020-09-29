import React from "react";

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
  }

  return (
    <div key={qId}>
      <h2>{category}</h2>
      <div className="questionContainer">{question}</div>
      <button value="True" onClick={checkCorrectAnswer}>
        True
      </button>
      <button value="False" onClick={checkCorrectAnswer}>
        False
      </button>
    </div>
  );
};

export default CardQuestion;
