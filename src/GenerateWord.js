import React from 'react';
import { useState, useEffect } from 'react';
import WordGuessInputForm from './WordGuessInputForm';
import GuessChecker from './GuessChecker';

const GenerateWord = () => {
  const [wordData, setWordData] = useState();
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState();

  const [guessedWord, setGuessedWord] = useState('');

  const saveGuessedWord = (data) => {
    console.log(data);

    setGuessedWord(data);

    //console.log(guessedWord.toString());
    //console.log(wordData.toString());

    GuessChecker(wordData, data);
  };

  useEffect(() => {
    fetch(`https://random-word-api.herokuapp.com/word`)
      .then((response) => response.json())
      .then((data) => setWordData(data));
    //console.log(wordData + ' use effect');
  }, []);

  return (
    <div className='GenerateWord'>
      {console.log(wordData)}
      <h1>{wordData}</h1>
      <WordGuessInputForm onSubmit={saveGuessedWord} />
    </div>
  );
};

export default GenerateWord;
