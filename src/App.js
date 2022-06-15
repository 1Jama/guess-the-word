import logo from './logo.svg';
import './App.css';
import GenerateWord from './GenerateWord';
import WordGuessInputForm from './WordGuessInputForm';
import React, { Component, useState } from 'react';

function App() {
  const [guessedWord, setGuessedWord] = useState('');

  const saveGuessedWord = (data) => {
    console.log(data);

    //console.log(guessedWord);

    setGuessedWord(data);
  };

  return (
    <>
      <div className='App'>
        <GenerateWord />
        <WordGuessInputForm onSubmit={saveGuessedWord} />
      </div>
    </>
  );
}

export default App;
