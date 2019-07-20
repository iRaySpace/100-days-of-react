import React, { useState } from 'react';

function QuizCard(props) {
  const [answer, setAnswer] = useState('');
  
  const { question, choices, onConfirm } = props;
  
  const Choices = choices.map((choice, id) => {
    const className = answer === id ? "App-quiz-choice selected" : "App-quiz-choice";
    return (
      <div 
        key={`choice-${id}`} 
        className={className}
        onClick={() => setAnswer(id)}
      >
        {choice}
      </div>
    );
  });

  return (
    <div className="App-quiz-card">
      <div className="App-question">{question}</div>
      <div className="App-quiz-choices">
        {Choices}
      </div>
      <button
        className="App-quiz-button"
        onClick={() => { onConfirm(answer) }}
      >
        Confirm
      </button>
    </div>
  );
}

export default QuizCard;
