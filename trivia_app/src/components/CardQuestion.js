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
  quizQuestion,
  progressQuestion,
}) => {
  const { category, question } = quizQuestion;

  const { currentQuestionData, evaluateInput } = useCheckCorrectAnswer();

  function checkCorrectAnswer(e) {
    const userAnswer = e.target.value;
    evaluateInput(userAnswer);
    progressQuestion();
  }

  useEffect(() => {
    currentQuestionData(quizQuestion);
  }, [currentQuestionData, quizQuestion]);

  return (
    <ContentCard key={questionId}>
      <div css={questionCount}>
        <p>
          Question: {questionId}/{questionLength}
        </p>
      </div>

      <h2 css={title}>{category}</h2>
      <div css={questionContainer}>
        <p>{question}</p>
      </div>

      <ButtonContainer userAnswerInput={checkCorrectAnswer} />
    </ContentCard>
  );
};

export default CardQuestion;
