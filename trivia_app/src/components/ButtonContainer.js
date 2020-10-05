/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const buttonContainer = css`
  width: 100%;
  margin: 25px 0;
  display: flex;
  justify-content: space-evenly;
`;

const boolButton = css`
  background-color: var(--main-Background);
  border: 2px solid var(--main-Color-dark);
  border-radius: 8px;
  padding: 25px;
  min-width: 30%;
  font-size: 2.5rem;
  font-weight: 800;
  scale: 1;
  transition: all 100ms ease-in-out;

  &:hover {
    font-weight: 900;
    scale: 1.05;
    cursor: pointer;
  }
`;

const ButtonContainer = ({ userAnswerInput }) => {
  return (
    <div css={buttonContainer}>
      <button
        css={boolButton}
        onClick={(e) => userAnswerInput(e)}
        name="answer true"
        value="True"
      >
        True
      </button>

      <button
        css={boolButton}
        onClick={(e) => userAnswerInput(e)}
        name="answer false"
        value="False"
      >
        False
      </button>
    </div>
  );
};
export default ButtonContainer;
