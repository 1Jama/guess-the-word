import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const WordGuessInputForm = (props) => {
  const [guess, setGuess] = useState('');

  //handles users submitted input on button click
  const handleSubmit = (e) => {
    e.preventDefault();

    const newGuess = guess;

    if (guess) {
      props.onSubmit(newGuess);
    }
    console.log('Submit works' + guess);

    //props.changeState(false);
  };

  return (
    <div className='form-group'>
      <Form onChange={(e) => setGuess(e.target.value)}>
        <Form.Control
          type='text'
          value={guess}
          placeholder='Place your guess here...'
        />
        <br />
        <Button
          type='submit'
          className='Button'
          variant='contained'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default WordGuessInputForm;
