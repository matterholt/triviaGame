import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ButtonBool from "./ButtonBool";
const ButtonContainer = ({ checkCorrectAnswer }) => {
  const buttonContainer = css`
    width: 100%;
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <div css={buttonContainer}>
      <ButtonBool value="True" checkCorrectAnswer={checkCorrectAnswer}>
        True
      </ButtonBool>
      <ButtonBool value="False" checkCorrectAnswer={checkCorrectAnswer}>
        False
      </ButtonBool>
    </div>
  );
};
export default ButtonContainer;
