import React from 'react';
import { useState, useEffect } from 'react';
import WordGuessInputForm from './WordGuessInputForm';
import GuessChecker from './GuessChecker';
import { Button } from 'react-bootstrap';

const GenerateWord = () => {
  const [wordData, setWordData] = useState();
  const [newWord, setNewWord] = useState(false);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [correctWord, setCorrectWord] = useState(true);

  const [guessedWord, setGuessedWord] = useState('');

  //Game reset function
  const resetGame = () => {
    setNewWord(!newWord);
    console.log(newWord + ' RESET');
    setScoreCounter(0);
  };

  const saveGuessedWord = (data) => {
    //printing word and guess
    console.log(data);
    console.log(wordData[0]);

    //storing the users guess and comparing it to the given word
    setGuessedWord(data);
    setCorrectWord(GuessChecker(wordData, data));
    console.log(correctWord);

    //results if based on if the users guess is correct or not
    if (correctWord === true) {
      setScoreCounter(scoreCounter + 1);
      setNewWord(!newWord);

      console.log(scoreCounter);
    } else if (correctWord === false) {
      resetGame();
    }
  };

  //Grabbing word from API - will replace once db is made
  useEffect(() => {
    fetch(`https://random-word-api.herokuapp.com/word`)
      .then((response) => response.json())
      .then((data) => setWordData(data));
  }, [newWord]);

  return (
    <div className='GenerateWord'>
      {/* {console.log(wordData)} */}
      <h1>{wordData}</h1>
      <h2> Score: {scoreCounter}</h2>
      <WordGuessInputForm onSubmit={saveGuessedWord} />
      <Button className='Button' variant='contained' onClick={resetGame}>
        Reset
      </Button>
    </div>
  );
};

export default GenerateWord;
