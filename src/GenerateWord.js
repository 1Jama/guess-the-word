import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WordGuessInputForm from './WordGuessInputForm';
import WordGuessInputFormHard from './WordGuessInputFormHard';
import { randomIntFromInterval } from './Util';
import PopUp from './PopUp.js';
import './GenerateWord.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const GenerateWord = () => {
  const [generatedWord, setGeneratedWord] = useState({});
  const [scoreCounter, setScoreCounter] = useState(0);
  const [englishWordList, setEnglishWordList] = useState([]);
  const [open, setOpen] = useState(false);
  const [wrongAnswerRestart, setWrongAnswerRestart] = useState(false);

  //on button click
  const saveGuessedWord = (data) => {
    //compare data
    var isCorrect = generatedWord.english === data;

    //update score & get new words if right, if wrong open popup
    if (isCorrect) {
      setScoreCounter(scoreCounter + 1);
      fetchWordData();
    } else {
      setOpen(true);
    }
  };

  const saveGuessedWordHard = (data) => {
    //compare data
    for (let index = 0; index <= data.length; index++) {
      if (data[index]) {
        var temp = data[index].replace(/[()]/g, '');

        var isCorrect = generatedWord.english === temp.toLowerCase();
        //  console.log(temp);
      }
      if (isCorrect) break;
      //update score & get new words if right, if wrong open popup
    }
    if (isCorrect) {
      setScoreCounter(scoreCounter + 1);
      fetchWordData();
    } else {
      setOpen(true);
    }
  };

  //Grabbing 4 word objects from DB
  const getFour = () => {
    return fetch(`http://localhost:3001/getFour`).then((response) =>
      response.json()
    );
  };

  //calls fetch function then assigns the generated correct word + fills wrong answer array
  const fetchWordData = async () => {
    const wordObjectArray = await getFour();
    var correctWordIndex = randomIntFromInterval(0, 3);

    setEnglishWordList(wordObjectArray.map((item) => item.english));
    setGeneratedWord(wordObjectArray[correctWordIndex]);
  };

  //on render and when the popup is closed => Fetch new words, fills wrong answer array with new words and sets score to 0
  useEffect(() => {
    fetchWordData();
    setScoreCounter(0);
  }, [wrongAnswerRestart]);

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

          <h1 className='spanishWord'>{generatedWord.spanish}</h1>

          <WordGuessInputFormHard
            englishWordList={englishWordList}
            onSubmit={saveGuessedWordHard}
          />
          <br />
        </div>
      </div>
      <PopUp
        trigger={open}
        setTrigger={setOpen}
        rightAnswer={generatedWord.english}
        setNewWords={setWrongAnswerRestart}
        newWords={wrongAnswerRestart}
      />
    </motion.div>
  );
};

export default GenerateWord;
