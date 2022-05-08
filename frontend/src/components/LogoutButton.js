import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import './Navbar.css';

export default function LogoutButton() {
    const {logout, isAuthenticated} = useAuth0()
  return (
    isAuthenticated && (
        <button className='navbar-login' onClick={() => logout()}>Log Out</button>
    )
  )
}
