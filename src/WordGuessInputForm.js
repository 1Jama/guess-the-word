import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WordGuessInputForm = (props) => {
  const englishWordList = props.englishWordList;

  //handles users submitted input on button click
  const handleSubmit = (e) => {
    props.onSubmit(e);
  };

  return (
    <div className='form-group'>
      <div className='guessInput'>
        <br />

        {englishWordList.map((item, i) => (
          <Button
            key={i}
            type='submit'
            variant='success'
            size='lg'
            onClick={() => handleSubmit(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WordGuessInputForm;
