import { useEffect, useState } from "react";
import { test_questions } from "./test_data";
const useFetchQuestionsAPI = () => {
  const [url, setURL] = useState(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  );
  const [questionList, seQuestionList] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // const API = `${process.env.TRIVIA_QUESTIONS}?amount=${amountQuestions}&difficulty=${difficultyLevel}&type=${typeQuestions}`;

  useEffect(() => {
    seQuestionList(test_questions.results);
    // setLoading(true);
    // const fetchAPI = async () => {
    //   try {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     seQuestionList(json.results);
    //   } catch (error) {
    //     setError(true);
    //   }
    //   setLoading(false);
    // };
    // fetchAPI();
  }, [url]);

  return [{ questionList, error, loading }, setURL];
};

export { useFetchQuestionsAPI };
