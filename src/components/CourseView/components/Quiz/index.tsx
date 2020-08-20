import React, { useState } from "react";
import QuizStart from "./QuizStart";
import QuizFinish from "./QuizFinish";
import QuizGame from "./QuizGame";


const Quiz = ({courseId, questions}) => {
  const [quizState, setQuizState] = useState<string>("init");
  const [totalScore, setTotalScore] = useState<number>(0);

  const changeQuizState = (state: string) => setQuizState(state);
  const changeTotalScore = (score: number) => setTotalScore(score);

  if (quizState === "init")
    return <QuizStart changeQuizState={(state) => changeQuizState(state)} />;

  if (quizState === "finished") {
    return <QuizFinish totalScore={totalScore} questions={questions} courseId={courseId} />;
  }

  return (
    <div className="quiz-section">
      <QuizGame
        changeQuizState={(state) => changeQuizState(state)}
        changeTotalScore={(score) => changeTotalScore(score)}
        questions={questions}
      />
    </div>
  );
};

export default Quiz;
