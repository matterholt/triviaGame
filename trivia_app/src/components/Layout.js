/** @jsx jsx */
import { jsx, css } from "@emotion/core";
const layout = css`
  min-height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  background-color: var(--main-Color-dark);
`;

export default function Layout({ children }) {
  return <div css={layout}>{children}</div>;
}
