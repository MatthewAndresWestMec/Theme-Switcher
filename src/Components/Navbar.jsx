import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <nav className={`navbar ${theme}`}>
      <h1>Matt's Page</h1>
      <div className='theme-toggle' onClick={changeTheme}>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faSun} className='icon' />
        ) : (
          <FontAwesomeIcon icon={faMoon} className='icon' />
        )}
      </div>
      <div className='links'>
        <a
          href='https://github.com/MatthewAndresWestMec'
          target='_blank'
          rel='noopener noreferrer'>
          Github
        </a>
        <a href='#' onClick={scrollToBottom}>
          Gallery
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
