import React from 'react';
import Navbar from './components/Navbar';
import Quizzes from './components/Quizzes';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './components/pages/Home';

import './App.css';
//import axios from 'axios';

//////////////////hard code the points into a div into the top right corner
//////////////////
///////////////// Brandon: get student's name and student's points
//////////////////           and then display it (under login/logout buttons)

function App() {
  
  //let payload = { userName: firstName, userPoints: points };
  //let res = axios.put('localhost:3000/points', payload );

  //const student_id = await axios.get('localhost:3000/Student/', { params: { id: student_id } });

  // { axios.get('localhost:3000/Student/{student_id}').then(student_id => {
  //   id = student_id
  // });
  // }

  return (
    <>
      <Router>
        <Navbar />
        
          <div className="score" style={{marginLeft: "auto", marginRight: 0, background: "none", marginBottom: "0px"}}>Name: Jane Doe</div>
          <div className="score" style={{marginLeft: "auto", marginRight: 0, background: "none", marginTop: "0px"}}>Points: 72</div>
          <Routes>
            {/* <Route exact path='/' component={Home} /> */}
            <Route path='/Quizzes' component={Quizzes} />
          
            {/* const config = {
              method: 'get',
              url: 'http://webcode.me'
            } */}


            {/* everything after localhost:3000 is the route
            /post
             */}

            


            {/* 
            sample: 

            axios.get('http://webcode.me').then(resp => {
              console.log(resp.data);
            }); */}


            
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
