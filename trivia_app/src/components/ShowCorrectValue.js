import React from "react";

const ShowCorrectValue = ({ correct_answer }) => (
  <p
    style={{
      fontWeight: "250",
      margin: " 5px 0px 0px 30px",
    }}
  >
    Correct Answer:
    <span style={{ fontWeight: "900" }}> {correct_answer}</span>
  </p>
);

export default ShowCorrectValue;
