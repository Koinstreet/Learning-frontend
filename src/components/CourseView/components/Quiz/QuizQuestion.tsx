import React, { useState } from "react";

const QuizQuestion = ({
  currentQues,
  question,
  options,
  selectAnswer,
  correctAnswer,
  correctState,
}) => {
  const [clicked, setClicked] = useState<string>();
  const questOptions = Object.keys(options).map((key: string) => {
    let calcBorder: string = "2px solid #C4C4C4";
    let calcText: string = "rgba(0, 0, 0, 0.58)";
    let calcOptionBackground: string = "transparent";

    if (correctState === "correct" && correctAnswer === key) {
      calcBorder = "2px solid #509F99";
      calcText = "#509F99";
      calcOptionBackground = "#509F99";
    }

    if (correctState === "wrong" && clicked === key) {
      calcBorder = "2px solid #EB5757";
      calcText = "#EB5757";
      calcOptionBackground = "#EB5757";
    }

    if (correctState === "wrong" && correctAnswer === key) {
      calcBorder = "2px solid #509F99";
      calcText = "#509F99";
      calcOptionBackground = "#509F99";
    }

    return (
      <li key={key}>
        <p style={{ color: calcText }}>{key}</p>{" "}
        <button
          style={{ border: calcBorder, color: calcText }}
          disabled={correctState ? true : false}
          onClick={() => {
            selectAnswer(key);
            setClicked(key);
          }}
        >
          <span
            style={{ border: calcBorder, background: calcOptionBackground }}
          ></span>{" "}
          {options[key]}
        </button>
      </li>
    );
  });
  return (
    <div className="quiz__question">
      <div className="quiz__question-text">
        <h3>{`${currentQues + 1}.`}</h3>
        <h3>{question}</h3>
      </div>
      <div className="quiz__question-options">
        <ul>{questOptions}</ul>
      </div>
    </div>
  );
};

export default QuizQuestion;
