import React, { useState } from "react";
let baseValue = null;

const TriviaQuestionsContext = React.createContext();
const UserAnswersContext = React.createContext(baseValue);

function QuestionProvider({ children }) {
  const [triviaQuestions, setTriviaQuestions] = useState([]); // update with fetch
  const [userAnswers, addUserAnswers] = useState([]);

  return (
    <TriviaQuestionsContext.Provider
      value={{ triviaQuestions, setTriviaQuestions }}
    >
      <UserAnswersContext.Provider
        value={(baseValue, { userAnswers, addUserAnswers })}
      >
        {children}
      </UserAnswersContext.Provider>
    </TriviaQuestionsContext.Provider>
  );
}

function useTriviaQuestions() {
  // Possibly remove trivia question context, only being called in three spot first on
  // would be on the quiz page, where it most import and only
  // the other is on results page and is to just remove.

  const context = React.useContext(TriviaQuestionsContext);
  if (context === undefined) {
    throw new Error("useTriviaQuestions must be used within a CountProvider");
  }
  return context;
}

function useAnsweredQuestions() {
  // keep the provider in the context folder allowing central location
  const context = React.useContext(UserAnswersContext);
  if (context === undefined) {
    throw new Error("useAnsweredQuestions must be used within a CountProvider");
  }

  return context;
}

export { QuestionProvider, useAnsweredQuestions, useTriviaQuestions };
