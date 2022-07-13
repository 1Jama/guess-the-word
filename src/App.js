import './App.css';
import GenerateWord from './GenerateWord';

import React, { Component, useState, Route } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
