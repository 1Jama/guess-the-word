import React, { useState } from 'react';

const WordGuessInputForm = () => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const guessedWord = { guess };

    props.onSubmit(guessedWord);

    props.changeState(false);
  };

  return (
    <div className='form-group'>
      <label htmlFor='formGroupExampleInput'>Guess the word:</label>
      <input
        type='text'
        className='WordGuessInputForm'
        id='form'
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
    </div>
  );
};

export default WordGuessInputForm;
