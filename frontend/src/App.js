import React from 'react';
import Navbar from './components/Navbar';
import Quizzes from './components/Quizzes';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {isLoading} = useAuth0()

  if (isLoading) return <div>Loading...</div>

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
