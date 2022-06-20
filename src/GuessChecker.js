import React, { Component, useState } from 'react';
import App from './App';

const GuessChecker = (word, guess) => {
  //returing true or false based on users guess compared to the given word
  return word[0] === guess;
};

export default GuessChecker;
