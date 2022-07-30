import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//hello world
const WordGuessInputForm = (props) => {
  const [guess, setGuess] = useState('');
  const [newWord, setNewWord] = useState(false);

  const [wordNumberTwo, setWordNumberTwo] = useState();
  const [englishWordsArray, setEnglishWordsArray] = useState([]);
  const englishWordList = [];

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/getThree`)
      .then((response) => response.json())
      .then((data) => setEnglishWordsArray(data));

    console.log(englishWordList);
  }, [newWord]);

  englishWordsArray.forEach((element) => {
    englishWordList.push(element.english);
  });

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
      </Form>
    </div>
  );
};

export default WordGuessInputForm;
