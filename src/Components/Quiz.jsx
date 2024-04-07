import { useCallback, useState } from "react";
import question from "./question";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === question.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectAnswer
  ) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
