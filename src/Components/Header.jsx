import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const { theme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <h1 className={`title ${theme}`}>My Top Three Favorite Games</h1>
      <div className={`scroll-down ${theme}`} onClick={scrollToBottom}>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </header>
  );
};

export default Header;
