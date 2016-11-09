import React from 'react';
import './App.css';

const Answers = ({answers}) => {
  let answersHTML = answers.map((answer, index) => {
    return (
      <li>
        <input type="radio" id={index} name={'answer-group-'+index} />
        <label for={index} key={index}>{answer.title}</label>
      </li>
    )
  })
  return (
    <div>
      {answersHTML}
    </div>
  )
}

export default Answers;
