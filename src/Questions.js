import React from 'react';
import './App.css';
import Answers from './Answers';


const Questions = ({questions}) => {
  let questionsHTML = questions.map((question, index) => {
    return (
      <section className="question" key={index}>
        <p className="quiz-question">{question.title}</p>
        <ul>
          <Answers answers={question.answers}/>
        </ul>
      </section>
    )
  })
  return (
    <div>
      {questionsHTML}
    </div>
  )
}

export default Questions;
