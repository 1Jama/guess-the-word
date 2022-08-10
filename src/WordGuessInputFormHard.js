import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const WordGuessInputFormHard = (props) => {
  const [guess, setGuess] = useState('');
  //const [hardGuessWordList, setHardGuessWordList] = useState([]);
  var hardGuessWordList = [];

  //Grabbing Synonyms from API
  const getSyns = (word) => {
    return fetch(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=c8a4efa3-7ee7-4068-877b-35d855eea11d`
    ).then((response) => response.json());
  };

  const fetchWordData = async (x) => {
    const wordObjectArray = await getSyns(x);
    hardGuessWordList = wordObjectArray.map((item) => item.meta.syns);

    return flatten(hardGuessWordList);
  };

  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
      );
    }, []);
  }

  //handles users submitted input on button click
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGuess = guess;
    const we = await fetchWordData(newGuess);
    we.push(newGuess);

    props.onSubmit(we);
    console.log(we);
    hardGuessWordList = [];
    setGuess('');
  };

  return (
    <div className='form-group'>
      <Form className='guessInput' onChange={(e) => setGuess(e.target.value)}>
        <Form.Control
          className='textInput'
          type='text'
          value={guess}
          placeholder='Place your guess here...'
        />

        <Button
          className='guessButton'
          type='submit'
          variant='success'
          size='xxl'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default WordGuessInputFormHard;
