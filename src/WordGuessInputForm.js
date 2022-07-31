import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//hello world
const WordGuessInputForm = (props) => {
  const [guess, setGuess] = useState('');
  const [newWord, setNewWord] = useState(false);
  const englishWordList = props.englishWordList;

  //handles users submitted input on button click
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewWord(!newWord);
    const newGuess = guess;
    setGuess('');
    if (guess) {
      props.onSubmit(newGuess);
    }

    //props.changeState(false);
  };

  return (
    <div className='form-group'>
      <Form className='guessInput' onChange={(e) => setGuess(e.target.value)}>
        <Form.Control type='text' placeholder='Place your guess here...' />
        <br />
        <Button
          type='submit'
          variant='success'
          size='lg'
          value={englishWordList[0]}
          onClick={handleSubmit}
        >
          {englishWordList[0]}
        </Button>
        <Button
          type='submit'
          variant='success'
          size='lg'
          value={englishWordList[1]}
          onClick={handleSubmit}
        >
          {englishWordList[1]}
        </Button>
        <Button
          type='submit'
          variant='success'
          size='lg'
          value={englishWordList[2]}
          onClick={handleSubmit}
        >
          {englishWordList[2]}
        </Button>
        <Button
          type='submit'
          variant='success'
          size='lg'
          value={englishWordList[2]}
          onClick={handleSubmit}
        >
          {englishWordList[3]}
        </Button>
      </Form>
    </div>
  );
};

export default WordGuessInputForm;
