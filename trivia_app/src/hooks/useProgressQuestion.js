import { useState } from "react";
function useProgressQuestion() {
  const [questionIndexToAnswer, nextQuestionToAnswer] = useState(0);

  function progressNextQuestion() {
    nextQuestionToAnswer(questionIndexToAnswer + 1);
  }

  return { progressNextQuestion, questionIndexToAnswer };
}

export { useProgressQuestion };
