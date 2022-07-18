import React from 'react';
import GenerateWord from './GenerateWord';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home />} />
        <Route path='/Guess' element={<GenerateWord />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
