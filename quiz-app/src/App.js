import React from 'react';
import logo from './logo.svg';
import './App.css';

import QuizCard from './components/QuizCard';

const Questions = [
  { ask: "Вы русский?", choices: ['да', 'нет'] },
  { ask: "Вы 22 года?", choices: ['да', 'нет'] },
];

function _Quizzes(question, id) {
  return (
    <QuizCard
      key={`quiz-card-${id}`}
      question={question.ask}
      choices={question.choices}
      onConfirm={() => console.log("Selected")}
    />
  );
};

function App() {
  const Quiz = Questions.map(_Quizzes);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        #100DaysOfReact
      </header>
      <div className="App-content">
        {Quiz}
      </div>
    </div>
  );
}

export default App;
