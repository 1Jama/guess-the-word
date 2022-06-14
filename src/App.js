import logo from './logo.svg';
import './App.css';
import GenerateWord from './GenerateWord';
import WordGuessInputForm from './WordGuessInputForm';
import React, { Component } from 'react';

function App() {
  return (
    <>
      <div className='App'>
        <GenerateWord />
        <WordGuessInputForm />
      </div>
    </>
  );
}

export default App;
