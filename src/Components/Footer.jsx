import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <div className={`footer-content ${theme}`}>
        <p className={`footer-text ${theme}`}>
          © 2024 My Awesome Website | Matthew Andres |{' '}
          <a
            href='https://github.com/MatthewAndresWestMec'
            target='_blank'
            rel='noopener noreferrer'
            className={`footer-icon ${theme}`}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
