import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h1 className={`cool ${theme}`}>My Favorite Games</h1>
  {/* Project 1 */}
      <ul className={`gallery ${theme}`}>
        
      <li className={`gallery- ${theme}`}>
          <img
            src='https://images.unsplash.com/photo-1649829874348-e163b8bd7d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            alt='flowers'
            className='gallery-image'
          />
          <div className={`gallery-details ${theme}`}>
            <h2 className={`gallery-title ${theme}`}>Boo-gle</h2>
            <button className={`gallery-button ${theme}`}>
              <FontAwesomeIcon icon={faLink} />
            </button>
              <p className={`gallery-subject ${theme}`}>"Crafting a unique homepage akin to Google, my project offers a personalized digital gateway, combining sleek design and efficient functionality to enhance your online experience. Your internet, your way."</p>          
          </div>
        </li>

      

      </ul>
    </>
  );
};

export default MainContent;
