import  { createContext,useState, useContext } from 'react';

const ThemeContext = createContext();

const ContextAPI = ({children}) => {
    const [theme, setTheme] = useState(data);

    const changeTheme = () => {
        setTheme();
    };

    return (
        <ThemeContext.Provider value={{ changeTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ContextAPI;
