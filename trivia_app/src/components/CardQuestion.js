import { useEffect } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ButtonContainer from "./ButtonContainer";
import ContentCard from "./ContentCard";

import { useCheckCorrectAnswer } from "../hooks/useCheckCorrectAnswer";

const title = css`
  background-color: var(--main-background);
  margin: 20px 0;
  color: var(--main-Color-dark);
`;
const questionContainer = css`
  max-width: 550px;
  height: 150px;
  margin: 25px 0;
`;
const questionCount = css`
  align-self: flex-start;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

const CardQuestion = ({
  questionId,
  questionLength,
  questionWasAnswered,
  quizQuestion,
  progressQuestion,
}) => {
  const { category, question } = quizQuestion;

  const { currentQuestionData, evaluateInput } = useCheckCorrectAnswer();

  function checkCorrectAnswer(e) {
    const userAnswer = e.target.value;
    evaluateInput(userAnswer);
    progressQuestion();
  } // custom hook useReducer

  useEffect(() => {
    currentQuestionData(quizQuestion);
  }, [currentQuestionData, quizQuestion]);

  return (
    <ContentCard key={questionId}>
      <p css={questionCount}>
        Question: {questionId}/{questionLength}
      </p>
      <h2 aria-label="Question Category" css={title}>
        {category}
      </h2>
      <div aria-label="Question to Answer" css={questionContainer}>
        {question}
      </div>

      <ButtonContainer userAnswerInput={checkCorrectAnswer} />
    </ContentCard>
  );
};

export default CardQuestion;
