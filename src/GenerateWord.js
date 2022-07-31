import React from 'react';
import { useState, useEffect } from 'react';
import WordGuessInputForm from './WordGuessInputForm';

import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './GenerateWord.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const GenerateWord = () => {
  const [generatedWord, setGeneratedWord] = useState();
  const [englishTranslation, setEnglishTranslation] = useState();
  const [newWord, setNewWord] = useState(false);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [wordNumber, setWordNumber] = useState();
  const [isCorrectWord, setIsCorrectWord] = useState(false);
  const [wordObjectsArray, setWordObjectsArray] = useState([]);
  const [englishWordList, setEnglishWordList] = useState([]);

  //Live updates isCorrectWord state on input submission
  useEffect(() => {
    setIsCorrectWord(isCorrectWord);

    guessResult();
  }, [isCorrectWord]);

  //results if based on if the users guess is correct or not
  const guessResult = () => {
    if (isCorrectWord) {
      setScoreCounter(scoreCounter + 1);
      setNewWord(!newWord);

      console.log(scoreCounter);
    } else if (isCorrectWord === false) {
      resetGame();
    }
  };

  //Game reset function
  const resetGame = () => {
    setNewWord(!newWord);
    console.log(newWord + ' RESET');
    setScoreCounter(0);
  };

  //on button click
  const saveGuessedWord = (data) => {
    //printing word and guess
    console.log(data);
    console.log(generatedWord);

    setIsCorrectWord(false);
    setIsCorrectWord(englishTranslation === data.toLowerCase());
    console.log(isCorrectWord);

    guessResult();
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //Grabbing word from DB
  const getFour = () => {
    return fetch(`http://localhost:3001/getFour`).then((response) =>
      response.json()
    );
    //.then((data) => setWordObjectsArray(data));
  };

  const getCorrectWord = (x) => {
    var correctWordIndex = randomIntFromInterval(0, 3);
    setGeneratedWord(x[correctWordIndex].spanish);
    setEnglishTranslation(x[correctWordIndex].english);
  };

  useEffect(() => {
    async function fetchData() {
      const x = await getFour();
      getCorrectWord(x);
      createEnglishWordArray(x);
    }
    fetchData();
  }, [newWord]);

  const createEnglishWordArray = (x) => {
    setEnglishWordList(x.map((item) => item.english));
  };

  return (
    <motion.div
      className='guessContainer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='innerGuessContainer'>
        <div className='wordAndForm'>
          <h2 className='score'> Score: {scoreCounter}</h2>

          <h1 className='spanishWord'>{generatedWord}</h1>

          <WordGuessInputForm
            englishWordList={englishWordList}
            onSubmit={saveGuessedWord}
          />
          <br />
          <Button className='Button' variant='danger' onClick={resetGame}>
            Reset
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default GenerateWord;
