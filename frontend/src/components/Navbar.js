import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Quizzes from './Quizzes';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const divStyle = {
    color: 'blue'
  };
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            EduFlash!
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Quizzes' className='nav-links' onClick={Quizzes}>
                Daily Quiz!
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Achievements' className='nav-links' onClick={closeMobileMenu}>
                Achievements
              </Link>
            </li>

            {/* <li> */}
              {/* <Link to='/Sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link> */}
            {/* </li> */}
            
            <li>
              <LoginButton className='nav-links-mobile' buttonStyle='btn--outline' />
            </li>

            <li>
              <LogoutButton className='nav-links-mobile' buttonStyle='btn--outline' />
            </li>

            <li>
              <Profile />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}


export default Navbar;