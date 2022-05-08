import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { Button } from './Button';
import './Navbar.css';

export default function LoginButton() {
    const {loginWithRedirect, isAuthenticated} = useAuth0()
  return (
      !isAuthenticated && (

        <button className='navbar-login' onClick={() => loginWithRedirect()}>Login</button>
      )
  )
}
