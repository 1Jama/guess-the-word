import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import './PopUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PopUp(props) {
  const [restartGame, setRestartGame] = useState();

  return props.trigger ? (
    <>
      <div className='page-mask'>
        <Modal
          show={true}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Title id='contained-modal-title-vcenter'>
            <h1>Incorrect!</h1>
          </Modal.Title>

          <Modal.Body>
            <div className='popupContainer'>
              <h1>The correct answer was: {props.rightAnswer}</h1>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={() => {
                props.setTrigger(false);
                props.setNewWords(restartGame);
                setRestartGame(!restartGame);
              }}
            >
              Restart
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  ) : (
    ''
  );
}

export default PopUp;
