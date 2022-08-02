import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import './PopUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PopUp(props) {
  const [restartGame, setRestartGame] = useState(true);

  return props.trigger ? (
    <>
      <div className='page-mask'>
        <div className='formContainer'>
          {props.children}
          <div className='popupContainer'>
            <h1>Wrong! The right answer was: {props.rightAnswer}</h1>
            <Button
              onClick={() => {
                props.setTrigger(false);
                props.setNewWords(restartGame);
                setRestartGame(!restartGame);
              }}
            >
              Restart
            </Button>
          </div>
        </div>
      </div>
    </>
  ) : (
    ''
  );
}

export default PopUp;
