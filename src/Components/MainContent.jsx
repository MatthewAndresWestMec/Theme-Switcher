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
            src='https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png'
            alt='flowers'
            className='gallery-image'
          />
          <div className={`gallery-details ${theme}`}>
            <h2 className={`gallery-title ${theme}`}>Minecraft</h2>
            <button className={`gallery-button ${theme}`}>
              <FontAwesomeIcon icon={faLink} />
            </button>
            <p className={` ${theme}`}>
              "Dive into Minecraft's pixelated wonders, where creativity knows
              no bounds. Explore vast landscapes, mine resources, and construct
              intricate structures. Face off against perilous creatures, survive
              the night, and uncover the mysteries of a blocky universe. Craft
              your own story in this sandbox masterpiece, where the only limit
              is your imagination."
            </p>
          </div>
        </li>

        <li className={`gallery- ${theme}`}>
          <img
            src='https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/6bAF2VVEamgKclalI0oBnoAe.jpg'
            alt='flowers'
            className='gallery-image'
          />
          <div className={`gallery-details ${theme}`}>
            <h2 className={`gallery-title ${theme}`}>Cyberpunk 2077</h2>
            <button className={`gallery-button ${theme}`}>
              <FontAwesomeIcon icon={faLink} />
            </button>
            <p className={` ${theme}`}>
              "Step into the neon-drenched chaos of Cyberpunk 2077, a dystopian
              future where your choices mold the city's fate. Navigate the
              sprawling Night City, hacking, fighting, and unearthing dark
              mysteries. Immerse yourself in a cybernetic world, where alliances
              and consequences define your journey. Will you thrive or succumb
              in this futuristic, tech-driven metropolis?"
            </p>
          </div>
        </li>

        <li className={`gallery- ${theme}`}>
          <img
            src='https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg'
            alt='flowers'
            className='gallery-image'
          />
          <div className={`gallery-details ${theme}`}>
            <h2 className={`gallery-title ${theme}`}>Baldur's Gate 3</h2>
            <button className={`gallery-button ${theme}`}>
              <FontAwesomeIcon icon={faLink} />
            </button>
            <p className={` ${theme}`}>
              "Embark on an epic journey in Baldur's Gate 3, where the Forgotten
              Realms unfold with perilous adventures. Navigate a world of
              mysteries, magic, and alliances that shape your destiny. Confront
              demons, forge powerful bonds, and unravel the profound narrative
              that awaits in this captivating Dungeons & Dragons-inspired
              role-playing experience. Your choices echo across the expansive
              realms."
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MainContent;
