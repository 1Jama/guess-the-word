import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WordGuessInputFormHard = (props) => {
  const [guess, setGuess] = useState('');
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
    const userInputWordGuessArray = await fetchWordData(newGuess);
    userInputWordGuessArray.push(newGuess);

    props.onSubmit(userInputWordGuessArray);

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
        <motion.div
          className='animatable'
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            className='guessButton'
            type='submit'
            variant='success'
            size='xxl'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </motion.div>
      </Form>
    </div>
  );
};

export default WordGuessInputFormHard;
