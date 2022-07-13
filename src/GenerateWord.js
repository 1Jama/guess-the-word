import React from 'react';
import { useState, useEffect } from 'react';
import WordGuessInputForm from './WordGuessInputForm';
import { Button } from 'react-bootstrap';

const GenerateWord = () => {
  const [generatedWord, setGeneratedWord] = useState();
  const [englishTranslation, setEnglishTranslation] = useState();
  const [newWord, setNewWord] = useState(false);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [wordNumber, setWordNumber] = useState();
  const [isCorrectWord, setIsCorrectWord] = useState(false);

  //Live updates isCorrectWord state on input submission
  useEffect(() => {
    setIsCorrectWord(isCorrectWord);

    guessResult();
  }, [isCorrectWord]);

  //returing true or false based on users guess compared to the given word
  /*   const GuessChecker = (word, guess) => {
    return word[0] === guess;
  }; */

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
    setIsCorrectWord(englishTranslation === data);
    console.log(isCorrectWord);

    guessResult();
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //Grabbing word from API - will replace once db is made
  useEffect(() => {
    setWordNumber(randomIntFromInterval(1, 1000).toString());
    fetch(`http://localhost:3001/words/getByNumber/${wordNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setGeneratedWord(data.spanish);
        setEnglishTranslation(data.english);
      });
  }, [newWord]);

  return (
    <div className='GenerateWord'>
      {/* {console.log(generatedWord)} */}
      <h1>{generatedWord}</h1>
      <h2> Score: {scoreCounter}</h2>
      <WordGuessInputForm onSubmit={saveGuessedWord} />
      <Button className='Button' variant='contained' onClick={resetGame}>
        Reset
      </Button>
    </div>
  );
};

export default GenerateWord;
