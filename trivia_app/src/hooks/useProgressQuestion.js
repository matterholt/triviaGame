import { useState } from "react";
function useProgressQuestion() {
  const [questionIndexToAnswer, nextQuestionToAnswer] = useState(0);

  function progressNextQuestion() {
    console.log("go to the next");
    nextQuestionToAnswer(questionIndexToAnswer + 1);
  }

  return { progressNextQuestion, questionIndexToAnswer };
}

export { useProgressQuestion };
