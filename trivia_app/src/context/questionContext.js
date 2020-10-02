import React, { useState } from "react";

const TriviaQuestionsContext = React.createContext();
const UserAnswersContext = React.createContext();

function QuestionProvider({ children }) {
  const [triviaQuestions, setTriviaQuestions] = useState([]); // update with fetch
  const [userAnswers, addUserAnswers] = useState([]);

  return (
    <TriviaQuestionsContext.Provider
      value={{ triviaQuestions, setTriviaQuestions }}
    >
      <UserAnswersContext.Provider value={{ userAnswers, addUserAnswers }}>
        {children}
      </UserAnswersContext.Provider>
    </TriviaQuestionsContext.Provider>
  );
}
function useTriviaQuestions() {
  // keep the provider in the context folder allowing central location
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
