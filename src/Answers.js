import React from 'react';
import './App.css';

const Answers = ({answers}) => {
  let answersHTML = answers.map((answer, index) => {
    return (
      <p className="quiz-answer" key={index}>{answer.title}</p>
    )
  })
  return (
    <div>
      {answersHTML}
    </div>
  )
}

export default Answers;
