import React, { Children } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const contentCard = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--main-Color-dark);
  background: linear-gradient(137deg, #f1f1f1, #afafaf);
  padding: 10px 20px;
  margin: 5px;
  border-radius: 10px;
  background-color: white;
  ${"" /* min-width: 250px; */}
  width: 80vw;
`;

export default function ContentCard({ children }) {
  return <div css={contentCard}>{children}</div>;
}
