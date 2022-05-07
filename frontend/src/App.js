import React from 'react';
import Navbar from './components/Navbar';
import Quizzes from './components/Quizzes';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          
          <Route path='/Quizzes' component={Quizzes} />
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
