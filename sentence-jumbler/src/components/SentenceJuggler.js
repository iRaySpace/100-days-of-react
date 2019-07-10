import React, { useState } from 'react';

function shuffle(array) {
  /**
   * Used the Fisher-Yates shuffle.
   * Check here: https://javascript.info/task/shuffle
   */
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

function cloneArray(array) {
  let cloned = []
  for (let i = 0; i < array.length; i++) {
    cloned.push(array[i]);
  }
  return cloned;
};

function SentenceJuggler() {
  const [sentence, setSentence] = useState('');
  const [sentences, setSentences] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    setSentences([...sentences, sentence]);
    setSentence('');
  };

  const onChange = (event) => {
    setSentence(event.target.value);
  };

  const shuffleSentences = () => {
    if (sentences.length < 3) {
      alert("Sentences should be at least 3.");
      return;
    }
    let cloned = cloneArray(sentences);
    shuffle(cloned);
    setSentences(cloned);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="App-sentence-input"
          value={sentence}
          onChange={onChange}
        />
      </form>
      {
        sentences.map((value, id) => (
          <div
            key={id}
            className="App-sentence"
            onClick={shuffleSentences}
          >
            {value}
          </div>
        ))
      }
    </div>
  );
};

export default SentenceJuggler;