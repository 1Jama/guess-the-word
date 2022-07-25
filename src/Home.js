import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.css';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

function Home() {
  var gameInstructions =
    'Hello! Welcome to guess the Spanish word! To begin, please click the Start! button above. A spanish word will be presented and you must give the correct english translation to score points. Input a wrong guess and your score will be set back to 0!';

  return (
    <motion.div
      className='homeContainer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='homeBox'>
        <div className='titleButtonInstructionsBox'>
          <p>Translate The Spanish Word!</p>
          <Link to='/Guess'>
            <Button className='startButton' variant='success'>
              Start!
            </Button>
          </Link>
          <Typical
            className='instructions'
            steps={[gameInstructions, 1000]}
            loop={1}
            wrapper='p'
          />
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
