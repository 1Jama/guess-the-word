import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WordGuessInputForm = (props) => {
  const [guess, setGuess] = useState('');
  const [newWord, setNewWord] = useState(false);
  const [newNumber, setnewNumber] = useState(false);

  const [wordNumberTwo, setWordNumberTwo] = useState();
  const [englishWordsArray, setEnglishWordsArray] = useState([]);

  var wordNumberValue = 0;

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const englishWordList = [];
    for (var counter = 0; counter < 3; counter++) {
      wordNumberValue = randomIntFromInterval(1, 1000);
      setWordNumberTwo(wordNumberValue.toString());
      fetch(`http://localhost:3001/words/getByNumber/${wordNumberValue}`)
        .then((response) => response.json())
        .then((data) => englishWordList.push(data.english));
    }
    setEnglishWordsArray(englishWordList);
  }, [newWord]);

  //handles users submitted input on button click
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewWord(!newWord);
    const newGuess = guess;
    setGuess('');
    if (guess) {
      props.onSubmit(newGuess);
    }
    console.log(englishWordsArray);

    //props.changeState(false);
  };

  return (
    <div className='form-group'>
      <Form className='guessInput' onChange={(e) => setGuess(e.target.value)}>
        <Form.Control
          type='text'
          value={guess}
          placeholder='Place your guess here...'
        />
        <br />
        <Button
          type='submit'
          variant='success'
          size='lg'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default WordGuessInputForm;
