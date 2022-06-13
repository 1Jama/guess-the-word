import React from 'react';
import { useState, useEffect } from 'react';

const GenerateWord = () => {
  const [wordData, setWordData] = useState();
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState();

  useEffect(() => {
    fetch(`https://random-word-api.herokuapp.com/word`)
      .then((response) => response.json())
      .then((data) => setWordData(data));
    console.log(wordData);
  }, []);

  return (
    <div className='GenerateWord'>
      {console.log(wordData)}
      <h1>{wordData}</h1>
    </div>
  );
};

export default GenerateWord;
