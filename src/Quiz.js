import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Questions from './Questions';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quiz: []
    };
  }

  componentDidMount() {
    axios.get('/quizzes', {
    })
    .then((response) => {
      this.setState({quiz:response.data.quizzes});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  renderQuiz(quiz){
    if(this.state.quiz.length!== 0){
      let quizHTML = this.state.quiz.map((quiz, index) => {
        return (
          <section className="quiz" key={index}>
            <p className="quiz-title">{quiz.title}</p>
            <Questions questions={quiz.questions}/>
          </section>
        )
      })
      return quizHTML
    }
  }

  render() {
    return (
      <div>
        {this.renderQuiz()}
      </div>
    );
  }
}

export default Quiz;
