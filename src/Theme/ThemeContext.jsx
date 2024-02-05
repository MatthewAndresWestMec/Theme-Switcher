import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const ContextAPI = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(false);

  const changeTheme = () => {
    setCurrentTheme((current) => !current);
  };

  return (
    <ThemeContext.Provider
      value={{ changeTheme, theme: currentTheme ? 'dark' : 'light' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ContextAPI };
