import React from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
        {englishWordList.map((item, i) => (
          <div className='ButtonBox'>
            <motion.div
              className='animatable'
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                className='guessButton'
                key={i}
                type='submit'
                variant='success'
                size='xxl'
                onClick={() => handleSubmit(item)}
              >
                {item}
              </Button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordGuessInputForm;
