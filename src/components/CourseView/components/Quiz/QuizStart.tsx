import React from "react";

const QuizStart = ({ changeQuizState }) => {
  return (
    <div className="quiz__start">
      <h2>Let’s see what you’ve learnt</h2>
      <p>
        Once quiz begins, do not leave this page until you are done with all
        questions.
      </p>
      <button className="button mt-5" onClick={() => changeQuizState("runnng")}>
        TAKE QUIZ
      </button>
    </div>
  );
};

export default QuizStart;
