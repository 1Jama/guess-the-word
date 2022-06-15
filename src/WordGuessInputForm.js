import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import App from './App';

const WordGuessInputForm = (props) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGuess = { guess };

    if (guess) {
      props.onSubmit(newGuess);
    }

    //props.changeState(false);
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
      <Button
        type='submit'
        className='Button'
        variant='contained'
        onClick={handleSubmit}
      >
        {' '}
        Submit{' '}
      </Button>
    </div>
  );
};

export default WordGuessInputForm;
