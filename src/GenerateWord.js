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
  const [scoreCounter, setScoreCounter] = useState(0);
  const [englishWordList, setEnglishWordList] = useState([]);

  //on button click
  const saveGuessedWord = (data) => {
    //compare data
    var isCorrect = englishTranslation === data;

    //get new words
    fetchWordData();
    //update score
    setScoreCounter(isCorrect ? scoreCounter + 1 : 0);

    //guessResult();
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

  const fetchWordData = async () => {
    const x = await getFour();
    var correctWordIndex = randomIntFromInterval(0, 3);

    setEnglishWordList(x.map((item) => item.english));
    setGeneratedWord(x[correctWordIndex].spanish);
    setEnglishTranslation(x[correctWordIndex].english);
  };

  useEffect(() => {
    fetchWordData();
  }, []);

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
        </div>
      </div>
    </motion.div>
  );
};

export default GenerateWord;
