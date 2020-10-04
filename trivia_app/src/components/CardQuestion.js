/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ButtonContainer from "./ButtonContainer";
import ContentCard from "./ContentCard";

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
  const {
    category,
    question,
    correct_answer,
    incorrect_answers,
  } = quizQuestion;

  function checkCorrectAnswer(e) {
    const userAnswer = e.target.value;
    if (
      userAnswer === correct_answer &&
      !incorrect_answers.includes(userAnswer)
    ) {
      // check if the answer is not in incorrect_answers
      questionWasAnswered({
        question: [question],
        userAnswer,
        correct_answer,
        isCorrectAnswer: true,
      });
      progressNextQuestion();
    } else {
      questionWasAnswered({
        question: [question],
        correct_answer,
        isCorrectAnswer: false,
        userAnswer,
      });
      progressNextQuestion();
    }
  } // custom hook useReducer

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

      <ButtonContainer checkCorrectAnswer={checkCorrectAnswer} />
    </ContentCard>
  );
};

export default CardQuestion;
