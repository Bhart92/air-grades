import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header'>
        <div className='header--wrapper'>
          <a href='/'><h1>AirGrades</h1></a>
          <div className='header--icon-wrapper'>
            <Link to='/about'><span>About</span></Link>
          </div>
        </div>
    </header>
  );
};
export default Header;