import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const scrollToContent = () => {
    const contentSection = document.getElementById('contentSection');
    if (contentSection) {
      window.scrollTo({
        top: contentSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`header ${theme}`}>
      <h1 className={`title ${theme}`}>My Super Cool Projects</h1>
      <div className={`scroll-down ${theme}`} onClick={scrollToContent}>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </header>
  );
};

export default Header;
