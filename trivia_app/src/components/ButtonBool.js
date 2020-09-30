import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ButtonBool = ({ children, ...props }) => {
  const boolButton = css`
    background-color: white;
    border: 2px solid gray;
    border-radius: 8px;
    padding: 5px;
    width: 40%;
    font-size: 2rem;
    scale: 1;
    transition: scale 200ms ease-in-out;

    &:hover {
      scale: 1.1;
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
