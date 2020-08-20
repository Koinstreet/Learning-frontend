import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";

const QuizGame = ({ changeQuizState, changeTotalScore, questions }) => {
  const [currentQues, setCurrentQues] = useState<number>(0);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [currentQuestionState, setCurrentQuestionState] = useState<
    string | undefined
  >();

  const onNextQuestion = () => {
    if (currentQues >= questions.length - 1) {
      changeTotalScore(currentScore);
      changeQuizState("finished");
      return;
    }
    setCurrentQuestionState(undefined);
    setCurrentQues(currentQues + 1);
  };

  const checkAnswer = (selected: string) => {
    if (selected === questions[currentQues].ans) {
      setCurrentScore(currentScore + 1);
      setCurrentQuestionState("correct");
    } else {
      setCurrentQuestionState("wrong");
    }
  };

  const ansStatement = () => {
    if (currentQuestionState === "wrong")
      return <div className="quiz__question-wrg-txt">Wrong answer</div>;
    else if (currentQuestionState === "correct")
      return <div className="quiz__question-crt-txt">Correct answer</div>;
    return;
  };
  return (
    <div>
      <QuizQuestion
        currentQues={currentQues}
        question={questions[currentQues].quest}
        options={questions[currentQues].options}
        selectAnswer={checkAnswer}
        correctAnswer={questions[currentQues].ans}
        correctState={currentQuestionState}
      />
      {ansStatement()}
      {currentQuestionState && (
        <div style={{ textAlign: "right" }}>
          <button className="button mt-5 px-5" onClick={onNextQuestion}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
