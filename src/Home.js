import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className='homeContainer'>
      <div className='homeBox'>
        <p>Translate The Spanish Word!</p>
        <Link to='/Guess'>
          <Button>Start!</Button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
