import React from 'react';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          
        <Route path='/Quiz' component={Quiz} />
          {/* <Route path='/' exact component={Home} />
          <Route path='/Quizzes' component={Quizzes} />
          <Route path='/Achievements' component={Achievements} />
          <Route path='/Sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
