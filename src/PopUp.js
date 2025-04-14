import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

import './PopUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PopUp(props) {
  const [restartGame, setRestartGame] = useState();

  return props.trigger ? (
    <>
      <div className='page-mask'>
        <Modal
          className='popUpModal'
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
              <h1>The correct answer was: </h1>
              <h1 className='incorrectWord'>{props.rightAnswer}</h1>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <motion.div
              className='animatable'
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant='warning'
                className='resetButton'
                autoFocus
                onClick={() => {
                  props.setTrigger(false);
                  props.setNewWords(restartGame);
                  setRestartGame(!restartGame);
                }}
              >
                <span class='front'>Restart Game!</span>
              </Button>
            </motion.div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  ) : (
    ''
  );
}

export default PopUp;
