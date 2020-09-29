import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to the Trivia Challenge</h1>
    <p>You will be precented with 10 True or False questions</p>
    <p>Can you score 100%</p>
    <Link to="/Quiz">BEGIN</Link>
  </div>
);
export default Home;
