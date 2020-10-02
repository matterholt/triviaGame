import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ButtonBool = ({ children, ...props }) => {
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
  return (
    <button
      css={boolButton}
      value={props.value}
      onClick={props.checkCorrectAnswer}
    >
      {children}
    </button>
  );
};

export default ButtonBool;
