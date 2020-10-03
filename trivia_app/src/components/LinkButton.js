/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

const linkButton = css`
  font-size: 2.5rem;
  padding: 1em 3.2em;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 5px;
  transition: scale 100ms ease-in-out;
  width: 50%;
  text-align: center;
  margin: 20px;
  border: 2px solid var(--main-Color-dark);
  color: var(--main-Color-dark);
  background-color: #c1c6c9;
  &:hover {
    scale: 1.05;
    box-shadow: 6px 4px 7px #494949;
    background-color: #d5d7d9;
    cursor: pointer;
  }
`;

const LinkButton = ({ link }) => {
  return (
    <Link css={linkButton} to={link.location}>
      {link.name}
    </Link>
  );
};
export default LinkButton;
