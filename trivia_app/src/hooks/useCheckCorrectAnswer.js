import { useState, useEffect } from "react";
function useCheckCorrectAnswer() {
  const [currentAskedQuestion, setCurrentAskedQuestions] = useState();
  const [correctAnswer, SetCorrectAnswer] = useState();
  const [incorrectAnswer, setIncorrectAnswer] = useState([]);

  const [evaluatedUserAnswer, setEvaluatedUserAnswer] = useState();
  const [didAnswerCorrect, setDidAnswerCorrect] = useState();
  const [userAnswer, setUserInput] = useState();

  useEffect(() => {
    if (userAnswer === correctAnswer && !incorrectAnswer.includes(userAnswer)) {
      setDidAnswerCorrect(true);
    } else {
      setDidAnswerCorrect(false);
    }
  }, [userAnswer, correctAnswer, setDidAnswerCorrect, incorrectAnswer]);

  useEffect(() => {
    // return the current evaluation
    // should just update the global state of the answer
    const askedQuestion = {
      currentAskedQuestion,
      userAnswer,
      correctAnswer,
      didAnswerCorrect,
    };

    setEvaluatedUserAnswer(askedQuestion);
  }, [currentAskedQuestion, userAnswer, correctAnswer, didAnswerCorrect]);

  function currentQuestionData(AskedQuestion) {
    const { question, correct_answer, incorrect_answers } = AskedQuestion;
    setCurrentAskedQuestions(question);
    SetCorrectAnswer(correct_answer);
    setIncorrectAnswer(incorrect_answers);
  }

  return { setUserInput, currentQuestionData, evaluatedUserAnswer };
}

export { useCheckCorrectAnswer };
