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
// think will break this up and add all to the quiz component??

const CardQuestion = ({
  questionId,
  questionLength,
  questionWasAnswered,
  quizQuestion,
  progressNextQuestion,
}) => {
  const { category, question } = quizQuestion;

  const {
    setUserInput,
    currentQuestionData,
    evaluatedUserAnswer,
  } = useCheckCorrectAnswer();

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
      <ButtonContainer userAnswerInput={setUserInput} />
    </ContentCard>
  );
};

export default CardQuestion;
