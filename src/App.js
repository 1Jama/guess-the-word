import './App.css';
import GenerateWord from './GenerateWord';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { Component, useState } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Guess' element={<GenerateWord />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
