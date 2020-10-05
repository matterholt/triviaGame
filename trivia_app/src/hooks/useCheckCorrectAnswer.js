import { useState } from "react";

import { useAnsweredQuestions } from "../context/questionContext";

function useCheckCorrectAnswer() {
  const { userAnswers, addUserAnswers } = useAnsweredQuestions();
  const [currentAskedQuestion, setCurrentAskedQuestions] = useState();
  const [correctAnswer, SetCorrectAnswer] = useState();
  const [incorrectAnswer, setIncorrectAnswer] = useState([]);

  const [evaluatedUserAnswer, setEvaluatedUserAnswer] = useState();
  const [didAnswerCorrect, setDidAnswerCorrect] = useState();
  const [userAnswer, setUserInput] = useState();

  function currentQuestionData(AskedQuestion) {
    const { question, correct_answer, incorrect_answers } = AskedQuestion;
    setCurrentAskedQuestions(question);
    SetCorrectAnswer(correct_answer);
    setIncorrectAnswer(incorrect_answers);
  }

  function evaluateInput(answer) {
    // code is not clean and there is duplication
    setUserInput(answer);
    if (answer === correctAnswer && !incorrectAnswer.includes(answer)) {
      setDidAnswerCorrect(true);
      const askedQuestion = {
        currentAskedQuestion,
        userAnswer: answer,
        correctAnswer,
        didAnswerCorrect: true,
      };
      setEvaluatedUserAnswer(askedQuestion);
      addUserAnswers([...userAnswers, askedQuestion]);
    } else {
      setDidAnswerCorrect(false);
      const askedQuestion = {
        currentAskedQuestion,
        userAnswer: answer,
        correctAnswer,
        didAnswerCorrect: false,
      };
      setEvaluatedUserAnswer(askedQuestion);
      addUserAnswers([...userAnswers, askedQuestion]);
    }
  }

  return { currentQuestionData, evaluateInput, evaluatedUserAnswer };
}

export { useCheckCorrectAnswer };
