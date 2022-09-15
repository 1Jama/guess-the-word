import './App.css';

import AnimatedRoutes from './AnimatedRoutes';
import { HashRouter as Router } from 'react-router-dom';

import React, { Component, useState } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
