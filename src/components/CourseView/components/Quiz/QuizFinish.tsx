import React from "react";
import { Link } from 'react-router-dom';
import flagImage from "../../../../assets/images/flag.svg";

const QuizFinish = ({ totalScore, questions, courseId }) => {
  const formatResponse = () => {
    const percentage: number = Math.ceil((totalScore / questions.length) * 100);
    if (percentage > 50) return "Good Job";
    else return "Nice Try!, You can do better";
  };
  return (
    <div className="quiz__finish">
      <img src={flagImage} alt="finished" />
      <h2>Quiz Complete</h2>
      <p className="quiz__finish--total">{`You answered ${totalScore} out of ${questions.length} correctly`}</p>
      <p className="quiz__finish--ans">{formatResponse()}</p>
      <Link to={`/overview/${courseId}`} className="button mt-5">FINISH</Link>
    </div>
  );
};

export default QuizFinish;
