import React from 'react';
import { useState, useEffect } from 'react';
import WordGuessInputForm from './WordGuessInputForm';
import GuessChecker from './GuessChecker';
import { Button } from 'react-bootstrap';

const GenerateWord = () => {
  const [wordData, setWordData] = useState();
  const [newWord, setNewWord] = useState(false);

  const [guessedWord, setGuessedWord] = useState('');

  const resetGame = () => {
    setNewWord(!newWord);
    console.log(newWord);
  };

  const saveGuessedWord = (data) => {
    console.log(data);

    setGuessedWord(data);

    GuessChecker(wordData, data);
  };

  useEffect(() => {
    fetch(`https://random-word-api.herokuapp.com/word`)
      .then((response) => response.json())
      .then((data) => setWordData(data));
  }, [newWord]);

  return (
    <div className='GenerateWord'>
      {console.log(wordData)}
      <h1>{wordData}</h1>
      <WordGuessInputForm onSubmit={saveGuessedWord} />
      <Button className='Button' variant='contained' onClick={resetGame}>
        Reset
      </Button>
    </div>
  );
};

export default GenerateWord;
