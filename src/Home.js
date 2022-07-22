import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.css';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      className='homeContainer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='homeBox'>
        <p>Translate The Spanish Word!</p>
        <Link to='/Guess'>
          <Button className='startButton'>Start!</Button>
        </Link>
      </div>
    </motion.div>
  );
}
export default Home;
