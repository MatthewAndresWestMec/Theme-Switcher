import React from 'react'
import ThemeContext from '../Theme/ThemeContext'
const Navbar = () => {
  return (
    
    <div><ThemeContext/>
        <h1>Navbar</h1>

<button onClick={changeTheme}>Change Theme</button>
    </div>
    
  )
}

export default Navbar