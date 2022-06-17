import logo from './logo.svg';
import './App.css';
import GenerateWord from './GenerateWord';

import React, { Component, useState } from 'react';
import GuessChecker from './GuessChecker';

function App() {
  return (
    <>
      <div className='App'>
        <GenerateWord />
      </div>
    </>
  );
}

export default App;
