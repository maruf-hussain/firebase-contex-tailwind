import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <nav>

      <Link to="/" >Home</Link>
      <Link to="/login" >Login</Link>
      <Link to="/register" >Register</Link>
      <Link to="/" >Auth Master</Link>

      {
        user ? <>
          <span>{user.email}</span>
          <button onClick={handleSignOut}>Sign Out</button> </>
          :
          <Link to="/login">Login</Link>
      }

    </nav>
  );
};

export default Header;