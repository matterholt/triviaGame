import React, { useState, useEffect } from "react";
import CardQuestion from "../components/CardQuestion";
/////

// TRY TO MOVE LOGIC OUT OF THE RENDER

/////

export default function Quiz() {
  const [trivialQuestions, setTrivialQuestion] = useState([]);
  const [questionAnswer, updateQuestionAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [questionToAnswer, nextQuestionToAnswer] = useState(0);

  function questionWasAnswered(userAnswered) {
    updateQuestionAnswer([...questionAnswer, userAnswered]);
  }

  useEffect(() => {
    //https://www.bitnative.com/2020/07/06/four-ways-to-fetch-data-in-react/
    // Get this out of render, custom hook or something react-query

    // what kind of checks are needed??
    const API =
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

    const testing = true;
    if (testing) {
      const test = {
        response_code: 0,
        results: [
          {
            category: "Vehicles",
            type: "boolean",
            difficulty: "hard",
            question:
              "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "Science: Computers",
            type: "boolean",
            difficulty: "hard",
            question: "DHCP stands for Dynamic Host Configuration Port.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Entertainment: Film",
            type: "boolean",
            difficulty: "hard",
            question:
              "&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Politics",
            type: "boolean",
            difficulty: "hard",
            question:
              "Joko Widodo has appeared in the cover of a TIME magazine.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "Entertainment: Music",
            type: "boolean",
            difficulty: "hard",
            question: "The band STRFKR was also briefly known as Pyramiddd.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "History",
            type: "boolean",
            difficulty: "hard",
            question: "The USS Missouri (BB-63) last served in the Korean War.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Entertainment: Japanese Anime & Manga",
            type: "boolean",
            difficulty: "hard",
            question: "Druid is a mage class in &quot;Log Horizon&quot;.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Politics",
            type: "boolean",
            difficulty: "hard",
            question:
              "George Clinton, Vice President of the United States (1805-1812), is an ancestor of President Bill Clinton.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Entertainment: Japanese Anime & Manga",
            type: "boolean",
            difficulty: "hard",
            question:
              "In the &quot;Kagerou Daze&quot; series, Shintaro Kisaragi is prominently shown with the color red.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "Art",
            type: "boolean",
            difficulty: "hard",
            question:
              "The Statue of Liberty&#039;s official name is &ldquo;Liberty Enlightening the World&rdquo;.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
        ],
      };
      setTrivialQuestion(test.results);
      console.log(test);
    }
    if (!testing) {
      fetch(API)
        .then((res) => {
          if (res.ok) return res.json();
          throw res;
        })
        .then((json) => {
          setTrivialQuestion(json.results);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Only view the one question

  function progressQuestion() {
    // const CurrentQuestionEvaluated = trivialQuestions.filter(
    //   (question, index) => index === questionToAnswer
    // );
    const CurrentQuestionEvaluated = trivialQuestions[questionToAnswer];
    //Step through test question , but not past the question length
    const questionLength = trivialQuestions.length;
    if (questionToAnswer < questionLength) {
      nextQuestionToAnswer(questionToAnswer + 1);
    } else {
      nextQuestionToAnswer(0);
    }
    setCurrentQuestion(CurrentQuestionEvaluated);
  }
  useEffect(() => {
    console.log(trivialQuestions);
    console.log(questionAnswer);
  });

  return (
    <div>
      <div>
        {currentQuestion ? (
          <CardQuestion
            questionWasAnswered={questionWasAnswered}
            quizQuestion={currentQuestion}
            progressQuestion={progressQuestion}
          />
        ) : null}
      </div>

      <button onClick={() => progressQuestion()}>NEXT</button>
    </div>
  );
}
